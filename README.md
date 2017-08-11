![Alt text](https://firebasestorage.googleapis.com/v0/b/knoxpo-60263.appspot.com/o/public%2Ffcees6.png?alt=media&token=57965f2f-280f-4e57-a010-26b5a6220046 "FireFunctions")

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

#### Pre-Setup FireFunctions
- Install Yarn if you don't have Yarn installed `brew install yarn`
- Install Firebase Tools if you don't already have it installed 
  `npm install -g firebase-tools` or `sudo npm install -g firebase-tools`

#### Setup FireFunctions
- `git clone https://github.com/knoxpo/firefunctions.git firefunctions`
- Run `cd firefunctions && yarn`
- Now, initialize firbase functions `firebase init functions`

Now, you are all set!

#### Get Started With FireFunctions
Working with FireFunctions makes Firebase Functions delpoy very easy. All your code goes in `./src` folder. Where all your express API code will go under `./src/api`, model creation will go under `./src/model`, trigger creation will go under `./src/triggers` and all other library initializtion will go under `./src/lib`.   

Full documentation will be updated soon.

Create the environment files below in `./src/environments`

#### environment.ts
```javascript
exports.environment = {
  -- ALL YOUR GLOBLE VALUES --
};
```

And finally Deploy: `yarn run deploy`

