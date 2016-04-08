'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap', [
    'ngResource',
    'ngAnimate',
    'ui.router',
    'angular.bootstrap.users',
    'angular.bootstrap.module2',
    'angular.bootstrap.module3', 
    'toaster'
  ])
  .config(conf)
  .run(run);

  function run(){
    //run app here
  }

  function conf($stateProvider, $urlRouterProvider,$httpProvider,$compileProvider,config) {

    if(config.environment === 'production'){
      //Tools like Protractor and Batarang need this information to run,
      //but you can disable this in production for a significant performance boost 
      $compileProvider.debugInfoEnabled(false);
    }

    //Intercept all xhr request
    $httpProvider.interceptors.push('HttpInterceptor');

    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/welcome'); 

    // Now set up the states
    $stateProvider
      .state('main',{
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract:true,
        resolve:{
          users: ['API',function(API){
            return API.get('users');
          }]
        }
      })
      .state('main.welcome',{
        url:'welcome',
        templateUrl: 'views/welcome.html'
      }); 
  }