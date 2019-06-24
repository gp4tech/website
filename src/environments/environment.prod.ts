import { FirebaseConfig, GoogleMapsKey } from './keys-config';

export const environment = {
  production: true,
  firebase: FirebaseConfig,
  functionsUrl: 'https://us-central1-gp4tech.cloudfunctions.net',
  firebaseStorageUrl:
    'https://firebasestorage.googleapis.com/v0/b/gp4tech.appspot.com/o/',
  googleMaps: GoogleMapsKey
};
