[![CircleCI](https://circleci.com/gh/gp4tech/website.svg?style=svg)](https://circleci.com/gh/gp4tech/website)

# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Create keys file

Run `env-keys-config:create-keys` and add your keys to the file: **src/environments/keys-config.ts**.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Firebase Hosting

Access [here](https://gp4techsite.firebaseapp.com/) for current develop site.

In order to deploy follow these steps:
- Install firebase tools globally if you don't have it: `npm install -g firebase-tools`
- Login to your firebase account the first time: `firebase login`
- Deploy the site after building it for production: `firebase deploy`

### Cloud Functions

#### Environment Variables Configuration

##### Local

To run locally these cloud functions you need to add missing environment variables in the *.runtimeconfig.json*.

To only run the functions execute:

```
firebase serve --only functions
```

##### On Firebase

On firebase the environment variables for the cloud functions are set up via a command:

```
firebase functions:config:set sendgrid.apikey="API_KEY"
```

To review which environment variables already are configured on firebase project:

```
firebase functions:config:get
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
