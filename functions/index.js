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
const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'http://localhost:8080',
  'https://us-central1-gp4techsite.cloudfunctions.net'
]

exports.updateBlogMetadata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);
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

function verifyOrigin(request, response) {
  const origin = request.headers.origin;

  if (ALLOWED_ORIGINS.indexOf(origin) > -1) {
    response.set('Access-Control-Allow-Origin', origin);
  }
}
