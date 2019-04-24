import { FirebaseConfig, GoogleMapsKey } from './firebase-config';

export const environment = {
  production: true,
  firebase: FirebaseConfig,
  functionsUrl: 'https://us-central1-gp4techsite.cloudfunctions.net',
  firebaseStorageUrl:
    'https://firebasestorage.googleapis.com/v0/b/gp4techsite.appspot.com/o/',
  googleMaps: GoogleMapsKey
};
