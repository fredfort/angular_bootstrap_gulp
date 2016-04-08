'use strict';

angular.module('angular.bootstrap.users')
.controller('UserCtrl',usersCtrl);

usersCtrl.$inject = ['user'];

function usersCtrl(user){
	/*jshint validthis: true */
	var vm = this;
	vm.user = user.data;
}