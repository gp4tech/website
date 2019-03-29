'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper');
const urlMetadata = require('url-metadata');
const cors = require('cors')({
  origin: true
});

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const ALLOWED_ORIGINS = [
  'http://127.0.0.1:4200',
  'http://127.0.0.1:8080',
  'https://gp4techsite.firebaseapp.com'
];
const BLOGS_COLLECTION = 'blogs';

function verifyOrigin(request, response) {
  const origin = request.headers.origin;

  if (ALLOWED_ORIGINS.indexOf(origin) > -1) {
    response.set('Access-Control-Allow-Origin', origin);
  }
}

function updateDocument(collectionName, document) {
  return firebaseHelper.firestore.updateDocument(db, collectionName, document.id, document);
}

function getDocument(collectionName, documentId) {
  return firebaseHelper.firestore.getDocument(db, collectionName, documentId);
}

exports.updateBlogMetadata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    const blogId = request.body.id;

    getDocument(BLOGS_COLLECTION, blogId)
      .then(blog => Promise.all([blog, urlMetadata(blog.url)]))
      .then(results => {
        let blog = results[0];
        const metadata = results[1];

        blog.title = metadata.title;
        blog.description = metadata.description;
        blog.image = metadata.image;

        updateDocument(BLOGS_COLLECTION, blog);

        return response.status(200).send(blog);
      })
      .catch(error => response.status(500).send(error));
  });

});

exports.updateBlogViews = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    const blogId = request.body.id;

    getDocument(BLOGS_COLLECTION, blogId)
      .then(blog => {
        const views = blog.views;
        blog.views = views ? views + 1 : 1;

        updateDocument(BLOGS_COLLECTION, blog);

        return response.status(200).send(blog);
      })
      .catch(error => response.status(500).send(error));
  });
});
