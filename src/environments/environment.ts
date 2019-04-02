import { FirebaseConfig } from './firebase-config';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  functionsUrl: 'http://localhost:5000/gp4techsite/us-central1',
  firebaseStorageUrl:
    'https://firebasestorage.googleapis.com/v0/b/gp4techsite.appspot.com/o/',
  firebase: {
    apiKey: 'AIzaSyCo7Sd8MSlfc9G5ScyG7_XOzxp9uEZWzAg',
    authDomain: 'gp4techsite.firebaseapp.com',
    databaseURL: 'https://gp4techsite.firebaseio.com',
    projectId: 'gp4techsite',
    storageBucket: 'gp4techsite.appspot.com',
    messagingSenderId: '495759529553'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
