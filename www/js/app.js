// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

// Replace this with your own Firebase URL: https://firebase.com/signup
.constant('FBURL', 'https://ionic-fb-seed.firebaseio.com/')

.factory('Auth', function($firebaseAuth, FBURL) {
  var ref = new Firebase(FBURL);
  return $firebaseAuth(ref);
})

.factory('Messages', function($firebaseArray, FBURL) {
  var ref = new Firebase(FBURL + '/messages');
  return $firebaseArray(ref);
})

.controller('MessageCtrl', function($scope, $ionicModal, Auth, Messages) {

  $scope.messages = Messages;

  // Create all of the modals
  var modals = ['message', 'login', 'signup'];

  $scope.createModal = function(modalName) {
    var modalURL = modalName + '.html';
    $ionicModal.fromTemplateUrl(modalURL, function(modal) {
      $scope[modalName + 'Modal'] = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
  };

  angular.forEach(modals, function(modalName) {
    $scope.createModal(modalName);
  });

  $scope.showModal = function(modalType) {
    $scope[modalType + 'Modal'].show();
  };

  $scope.closeModal = function(modalType) {
    $scope[modalType + 'Modal'].hide();
  };

  // check for user's authentication status
  Auth.$onAuth(function(authData) {
    if (authData) {
      $scope.loggedInUser = authData;
    } else {
      $scope.loggedInUser = null;
    }
  });

  // create a new user
  $scope.createUser = function(user) {
    Auth.$createUser({
      email: user.email,
      password: user.pass
    }).then(function(userData) {
      return Auth.$authWithPassword({
        email: user.email,
        password: user.pass
      });
    }).then(function(authData) {
      // logged in successfully
      console.log(authData);
      $scope.loggedInUser = authData;
      $scope.closeModal('signup');
    }).catch(function(error) {
      // error logging in
      console.log(error);
    });
  };

  // login a user
  $scope.login = function(user) {
    Auth.$authWithPassword({
      email: user.email,
      password: user.pass
    }).then(function(authData) {
      //successful
      console.log('logged in as: ', authData);
      $scope.loggedInUser = authData;
      $scope.closeModal('login');
    }).catch(function(error) {
      // auth failed
    });
  };

  // unauth a user
  $scope.logout = function() {
    Auth.$unauth();
  };

  // add a message
  $scope.addMessage = function(message) {
    if ($scope.loggedInUser) {
      Messages.$add({
        email: $scope.loggedInUser.password.email,
        text: message.text
      });
      message.text = "";
      $scope.closeModal('message');
    }
  };

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
