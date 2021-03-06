# Solid Covid manager-app

Covid-19 application that is made with TypeScript and React.js

## Table of contents

- [💻 How to set it up ](#How-to-set-it-up)
- [🔗 Links](#Links)

## How-to-set-it-up

### Firebase setup

For this section you will have to create an .env file and setup a database at [Firebase](https://firebase.google.com/). When you have an account and an project in Firebase you will have create your Realtime Database. If you have done all that you will need an .env file with the following items:

    REACT_APP_apiKey= "apiKey"
    REACT_APP_authDomain= "authDomain"
    REACT_APP_projectId= "covid-solid-app"
    REACT_APP_databaseURL= "your database url"
    REACT_APP_storageBucket="storageBucket"
    REACT_APP_messagingSenderId= "messagingSenderId"
    REACT_APP_appId= "appId"

These items you can find at your project settings. The database url will not be under project settings but on the Realtime Database the first link you see. This can be the same database as the one you made for Solid app. [Solid repo](https://github.com/Wotusay/Covid-Safe-Cronos)

There are some rules you can set for your database but these are optional if you just want to test the project out. You can edit these at the rules tab in your Realtime database.

    {
      "rules": {
        ".write": true,
        "covid-items": {
                ".read": "auth.uid != null",
      },
            "users":{
          ".read": "auth.uid != null",
            }
      }
    }

### Firebase Authentication

I have followed a guide that explains how you can setup the microsoft integration with Firebase. [Just follow these steps and you will be fine](https://medium.com/@susanna2222/swift-integrate-firebase-with-microsoft-authenticate-c8f1d42b11f1)

[More explanation is on the Manager app about the authentication.](https://github.com/Wotusay/manager-app)

### Project setup

Just pull in the repository and place the .env file in the folder that has been pulled in.

#### `yarn`

This will download all the packages needed for development and production.
After yarn has created the node_modules you can run the following commands:

#### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Links

[Documentation of the packages used](https://docs.inrupt.com/developer-tools/javascript/client-libraries/)

[Firebase](https://firebase.google.com/)

[Solid repo](https://github.com/Wotusay/Covid-Safe-Cronos)
