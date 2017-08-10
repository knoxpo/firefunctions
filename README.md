# FireFunctions
Starter kit for Firebase Functions

- [Live Demo](https://firestarter-96e460.firebaseapp.com/)
- [Lessons and Screencasts](https://medium.com/knoxpo)
- [Join the Slack Team](https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg)

## Features

- Authentication w/ Router Guard
- Realtime Database CRUD Demo
- File Uploads to Firebase Storage Demo
- SASS + Bulma + FontAwesome
- Reactive Form Validation

## Usage

Create an account at https://firebase.google.com/

- `git clone https://github.com/knoxpo/firefunctions.git firefunctions`
- `cd firefunctions`
- `npm install` OR `yarn add`

Create the environment files below in `src/environments/`.

#### environment.js
```javascript
exports.environment = {
  firebaseConfig: {
    apiKey: "APIKEY",
    authDomain: "DEV-APP.firebaseapp.com",
    databaseURL: "https://DEV-APP.firebaseio.com",
    storageBucket: "DEV-APP.appspot.com"
  }
};
```

And finally Deploy: `npm deploy` or `yarn deploy`

