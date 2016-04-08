'use strict';

angular.module('angular.bootstrap')

.factory('API',['$http','config',function($http, config){
	var baseUrl = config.api.baseUrl;

	return {
		get:function(url){
			if(!url){
				throw "url has to be defined";
			}
			return $http.get(baseUrl+url);
		}, 		
		post:function(url, bodyParams){
			if(!bodyParams || !angular.isObject(bodyParams)){
				throw "Second parameters need to be an Object";
			}
			return $http.post(baseUrl+url,bodyParams);
		}, 

		put:function(url, bodyParams){
			if(!bodyParams || !angular.isObject(bodyParams)){
				throw "Second parameters need to be an Object";
			}
			return $http.put(baseUrl+url,bodyParams);
		}, 

		delete: function(url){
			if(!url){
				throw "url has to be defined";
			}
			return $http.delete(url);
		}	
	};

}]);