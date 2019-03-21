const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper');
const urlMetadata = require('url-metadata');
const cors = require('cors')({
  origin: true
});

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const BLOGS_COLLECTION = 'blogs';

exports.updateBlogMetadata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set('Access-Control-Allow-Origin', '*');
    const blog = request.body;

    urlMetadata(blog.url)
      .then(metadata => {
        blog.title = metadata.title;
        blog.description = metadata.description;
        blog.image = metadata.image;

        firebaseHelper.firestore.updateDocument(db, BLOGS_COLLECTION, blog.id, blog);

        return response.status(200).send(metadata);
      })
      .catch(error => response.status(500).send(error));
  });
});
