[![CircleCI](https://img.shields.io/circleci/project/github/gp4tech/website/develop.svg?label=CircleCI)](https://circleci.com/gh/gp4tech/website)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE)

# GP4Tech Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Setup your environment

- Install [Node.js](https://nodejs.org/en/).
- Install [Angular CLI](https://cli.angular.io/).
- Clone the repo:

```
git clone https://github.com/gp4tech/website.git
```

- Install dependencies:

```
cd website
```

```
npm install
```

- [Create the keys file](#create-keys-file).
- Run the project locally on the [Development server](#development-server).

## Create keys file

Run `npm run env-keys-config:create-keys` and add your keys to the file: **src/environments/keys-config.ts**.

### Firebase keys

You can find the firebase keys for dev site in the following [link](https://console.firebase.google.com/project/gp4techsite/settings/general/web:MDE4MTE4MTAtYmMzOS00MzE0LThmNDMtYmY5MTQ3NTgzNTM3).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running lint

Run `ng lint` to execute linting.

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

To run locally these cloud functions you need to add missing environment variables in the _.runtimeconfig.json_.

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

## CI/CD

Continuous Integration and Continuous Deployment is made with [CircleCI](https://circleci.com/gh/gp4tech/website).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
