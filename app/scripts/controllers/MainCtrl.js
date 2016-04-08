'use strict';

angular.module('angular.bootstrap')
.controller('MainCtrl',mainCtrl);

mainCtrl.$inject = ['$scope','API','config'];

function mainCtrl($scope,API,config){
	$scope.data = {
		environment: config.environment
	};	
}