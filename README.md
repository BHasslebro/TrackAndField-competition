# TrackAndField-competition
A webbased tool to handle track and field competition with a score system for teams. Right now only in Swedish.
### Prerequisites

* [npm](https://www.npmjs.com/get-npm) - npm package handler
* [firebase](https://firebase.google.com) - You will need a firebase db/project
### Installing
    
In the root of the project do:
```
npm install
```
Copy src/settings.js.template to src/settings.js
```
cp src/settings.js.template src/settings.js
```
Change the template data to your firebase setting, you can find your data in your firebase project:
```
var config = {
  apiKey: "YOURAPIKEY",
  authDomain: "yourdomain.firebaseapp.com",
  databaseURL: "https://yourdb.firebaseio.com",
  projectId: "yourproject",
  storageBucket: "yourstorgebucket.appspot.com",
  messagingSenderId: "yourmessagingSenderId"
};
```
### Run the test
```
npm test
```

Yup, thats it...
### Running on a local machine
When the installation above is done you can go to the directory and type
```
npm run
```
This will start a server on localhost:3000 and launch a browser. 