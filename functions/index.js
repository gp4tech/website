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
  'https://us-central1-gp4techsite.cloudfunctions.net'
]
const BLOGS_COLLECTION = 'blogs';
const DEFAULT_ERROR_MESSAGE = 'Internal Server Error.';

function verifyOrigin(request, response) {
  const origin = request.headers.origin;

  if (ALLOWED_ORIGINS.indexOf(origin) > -1) {
    response.set('Access-Control-Allow-Origin', origin);
  }
}

function updateBlog(blog) {
  if (blog.id) {
    firebaseHelper.firestore.updateDocument(db, BLOGS_COLLECTION, blog.id, blog);
    return true;
  }
  return false;
}

exports.updateBlog = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    let blog = request.body;
    const blogUpdated = updateBlog(blog);

    if (blogUpdated) {
      return response.status(200).send(blog);
    }
    return response.status(500).send(DEFAULT_ERROR_MESSAGE);
  });
});

exports.updateBlogMetadata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    verifyOrigin(request, response);

    let blog = request.body;

    urlMetadata(blog.url)
      .then(metadata => {
        blog.title = metadata.title;
        blog.description = metadata.description;
        blog.image = metadata.image;

        const blogUpdated = updateBlog(blog);

        if (blogUpdated) {
          return response.status(200).send(blog);
        }
        return response.status(500).send(DEFAULT_ERROR_MESSAGE);
      })
      .catch(error => response.status(500).send(error));
  });
});
