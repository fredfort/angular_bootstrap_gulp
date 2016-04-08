'use strict';

angular.module('angular.bootstrap').factory('HttpInterceptor',['$q','toaster',function($q, toaster) {
  var sessionInjector = {

  	request: function(config){
      //do something before requesting the API
  		return config;
  	},

    responseError: function(rejection){
      //do something with the rejected request
      toaster.pop('error', 'A server error has occured');
      return $q.reject(rejection);    
    }
  };
  return sessionInjector;
}]);