'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap.module2', [
    //load dependencies specific to this module
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    var PATH = '/modules/module2';

    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/module2');

    // Now set up the states
    $stateProvider
      .state('main.module2',{
        url:'module2',
        templateUrl: PATH + '/views/main.html',
        controller: 'Module2MainCtrl',
        controllerAs:'module2'
      });
  });