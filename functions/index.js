'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper');
const urlMetadata = require('url-metadata');
const cors = require('cors')({
  origin: true
});
const sendgrid = require('sendgrid');
const sendgridClient = sendgrid(functions.config().sendgrid.apikey);

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const ALLOWED_ORIGINS = [
  'http://127.0.0.1:4200',
  'http://127.0.0.1:8080',
  'https://gp4techsite.firebaseapp.com',
  'https://gp4techpreview.firebaseapp.com',
  'https://gp4techsite.web.app',
  'https://gp4techpreview.web.app'
];
const ARTICLES_COLLECTION = 'articles';
const SUPPORTERS_COLLECTION = 'supporters';
const COUNTRY_SUPPORTERS_COLLECTION = 'country-supporters';

function verifyOrigin(request, response) {
  const origin = request.headers.origin;

  if (ALLOWED_ORIGINS.indexOf(origin) > -1) {
    response.set('Access-Control-Allow-Origin', origin);
  }
}

function createDocument(collectionName, data) {
  return firebaseHelper.firestore.createNewDocument(db, collectionName, data)
    .then(documentRef => {
      data.id = documentRef.id;
      updateDocument(collectionName, data);
      return documentRef;
    })
}

function updateDocument(collectionName, document) {
  return firebaseHelper.firestore.updateDocument(db, collectionName, document.id, document);
}

function getDocument(collectionName, documentId) {
  return firebaseHelper.firestore.getDocument(db, collectionName, documentId);
}

function searchDocument(collectionName, query) {
  return firebaseHelper.firestore.queryData(db, collectionName, query);
}

function configureEmailBody(body) {
  var helper = sendgrid.mail;
  var fromEmail = new helper.Email(body.from);
  var toEmail = new helper.Email(body.to);
  var subject = body.subject;
  var content = new helper.Content('text/html', body.content);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  return  mail.toJSON();
}

exports.updateBlogMetadata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    const articleId = request.body.id;

    getDocument(ARTICLES_COLLECTION, articleId)
      .then(article => Promise.all([article, urlMetadata(article.url)]))
      .then(results => {
        let article = results[0];
        const metadata = results[1];
        console.log(metadata);

        article.title = metadata.title;
        article.description = metadata.description;
        article.author = metadata.author;
        article.image = metadata.image;
        article.date = admin.firestore.Timestamp.now();

        updateDocument(ARTICLES_COLLECTION, article);

        return response.status(200).send(article);
      })
      .catch(error => response.status(500).send(error));
  });

});

exports.updateBlogViews = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    const articleId = request.body.id;

    getDocument(ARTICLES_COLLECTION, articleId)
      .then(article => {
        const views = article.views;
        article.views = views ? views + 1 : 1;

        updateDocument(ARTICLES_COLLECTION, article);

        return response.status(200).send(article);
      })
      .catch(error => response.status(500).send(error));
  });
});

exports.httpEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    verifyOrigin(req, res);

    if (req.method !== 'POST') {
      const error = new Error('Only POST requests are accepted');
      res.status(405).send(error)
    }
    sendEmail(req.body)
      .then(_ => res.status(200).send(response.body))
      .catch(error => res.status(500).send(error));
  });
});

exports.createSupporter = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    verifyOrigin(req, res);

    if (req.method !== 'POST') {
      const error = new Error('Only POST requests are accepted');
      res.status(405).send(error)
    }

    const supporter = req.body;
    let error = 'UNKNOWN_ERROR';

    Promise.all([
      searchDocument(COUNTRY_SUPPORTERS_COLLECTION, [['country', '==', supporter.country]]),
      searchDocument(SUPPORTERS_COLLECTION, [['email', '==', supporter.email]])])
      .then(([countrySupportersFound, existantSupporter]) => {
        if (typeof existantSupporter === 'object') {
          error = 'EXISTANT_SUPPORTER';
          throw Error(error);
        }

        if (typeof countrySupportersFound === 'string') {
          return createDocument(COUNTRY_SUPPORTERS_COLLECTION, {
            id: null,
            count: 1,
            country: supporter.country
          });
        }

        const countrySupporters = Object.values(countrySupportersFound)[0];
        countrySupporters.count++;

        return updateDocument(COUNTRY_SUPPORTERS_COLLECTION, countrySupporters);
      })
      .then(_ => createDocument(SUPPORTERS_COLLECTION, supporter))
      .then(_ => sendEmail({
        from: 'gp4tech@jalasoft.com',
        to: supporter.email,
        content: `Welcome new supporter: ${supporter.firstname} ${supporter.lastname}`,
        subject: 'Thanks for supporting us!'
      }))
      .then(_ => res.status(201).send({message: 'SUPPORTED_CREATED'}))
      .catch(processError => {
        console.error(processError);
        return res.status(500).send({ error })
      })
  });
});

function sendEmail(body) {
  const request = sendgridClient.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: configureEmailBody(body)
  });
  return new Promise((resolve, reject) => {
    sendgridClient.API(request)
    .then(_ => {
      resolve();
      return;
    })
    .catch((error) => {
      reject(error)
    });
  });
}
