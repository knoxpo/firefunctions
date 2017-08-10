![Alt text](https://firebasestorage.googleapis.com/v0/b/knoxpo-60263.appspot.com/o/public%2Ffcees6.png?alt=media&token=1f75b4fc-daf0-435c-aba7-9328e27a07e8 "FireFunctions")

# FireFunctions
Starter kit for Firebase Functions

- [Live Demo](https://firestarter-96e460.firebaseapp.com/)
- [Tutorials and Screencasts](https://medium.com/knoxpo)

## Features

- Firebase Authentication Token Validator
- Realtime Database CRUD
- Connect to other Google Cloud Services
- Base on Express.js
- ES6 Typing

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

