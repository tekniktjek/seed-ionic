Ionic + Firebase Seed App
=========================

This is a seed application to help you get started building apps with [Ionic](http://ionicframework.com/) and Firebase. Using [AngularFire](https://www.firebase.com/docs/web/libraries/angular/), this app implements email & password authentication and adds messages to a synchronized array. The app is built using the [Ionic CLI](http://ionicframework.com/docs/cli/).

## Getting Started

First, replace `FBURL` with the URL of your own Firebase on line 4 in `/www/js/app.js`. To run this app you need to install the Ionic CLI. Run the following commands to get started:

```
npm install -g ionic
git clone git@github.com:sararob/ionic-seed.git
cd ionic-seed/
ionic serve
```

To see a side by side iOS and Android view of your app in the browser, run `ionic serve --lab` instead of `ionic serve`. Details on `ionic serve` can be found in the [Ionic docs](http://ionicframework.com/docs/cli/test.html).


## Running your app

You can run this app in the browser using the command `ionic serve`, or use `ionic serve --lab` to run it in the browser with a side by side iOS and Android view.

To configure your app for iOS or Android and run it in the emulator, follow the instructions in the [Ionic docs](http://ionicframework.com/docs/cli/run.html).

## How it Works

Since Ionic is built on top of Angular, this seed application uses AngularFire.

#### Email & password authentication

This app makes use of Firebase's [email & password authentication](https://www.firebase.com/docs/web/guide/login/password.html). To enable email & password auth, navigate to the "Login & Auth" tab in your Firebase app dashboard and select "Enable Email & Password Authentication".

Once it's enabled, you're ready to start creating and authenticating users in your app. You can create users with AngularFire's [`$createUser()`](https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication-createusercredentials) method, passing it an email and password. Then you'll use `$authWithPassword()` to log users in, and `$unauth()` to log users out. This app also makes use of `$onAuth` to check the user's authentication state and set `$scope.loggedInUser` to the current user.

Firebase also supports authentication with Facebook, Twitter, GitHub, Google, anonymous auth, and custom authentication. Check out the docs on user authentication for details on these authentication methods.

#### Adding messages to a synchronized array

This app uses the [`$firebaseArray`](https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html) service to store message data in a synchronized array. Using `$firebaseArray`, our local Angular array is kept in sync with our remote Firebase data. To add items to `$firebaseArray`, use the $add() method. Check out the [AngularFire documentation](https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html) for more details on how this works.

## Testing your app

## Securing your app

This seed app has very basic security rules to ensure that only logged in users can add messages to the list, and that new messages are not empty. You can see them in the `rules.json` file. If you're using Firebase Hosting to deploy your application, you can deploy your security rules file to Firebase by adding a `rules` parameter to your `firebase.json` file. Check out the [hosting documentation](https://www.firebase.com/docs/hosting/guide/full-config.html#section-advanced-properties) for details on configuring this.

For more details on security rules, check out the [security quickstart](https://www.firebase.com/docs/security/quickstart.html) in our documentation.

## Deploying your app

To publish your app in the iOS or Android app stores, follow the instructions in the [Ionic documentation](http://ionicframework.com/docs/guide/publishing.html).

You can use [Firebase Hosting](https://www.firebase.com/docs/hosting/) to deploy your app on the web in three steps:

#### 1. Install the Firebase command line tools

To install firebase-tools, run the command:

`npm install -g firebase-tools`

#### 2. Initialize your app

`cd` into your app directory and run the command:

`firebase init`

Then you'll be prompted to enter the name of the Firebase app you'd like to deploy. After selecting your app, enter `www/` as the current directory. This will tell Firebase Hosting to deploy your `www/` directory (which is where your `index.html` file lives) every time you deploy your app. You only ever need to run this init command once.

#### 3. Deploy your app

To deploy your app simply run:

`firebase deploy`

Your app will be deployed `YOUR-APP-NAME.firebaseapp.com`. Custom domains are available for paid plans, and details on setting up custom domains can be found [here](https://www.firebase.com/docs/hosting/guide/custom-domain.html).

## File Structure
