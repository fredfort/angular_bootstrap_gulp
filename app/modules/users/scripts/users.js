'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap.users', [
    //load dependencies specific to this module
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    var PATH = '/modules/users';
    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/users');

    // Now set up the states
    $stateProvider   
      .state('main.users',{
        url:'users', 
        templateUrl: PATH+'/views/main.html',
        controller: 'UsersCtrl',
        controllerAs:'users', 
        resolve:{
          users : ['API', function(API){
            return API.get('users');
          }]
        }
      })
      .state('main.user',{
        url:'user/:userId', 
        templateUrl: PATH+'/views/user.html',
        controller: 'UserCtrl',
        controllerAs:'user', 
        resolve:{
          user : ['API','$stateParams',function(API,$stateParams){
            return API.get('users/'+$stateParams.userId);
          }]
        }
      });;
  }); 