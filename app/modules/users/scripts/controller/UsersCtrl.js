'use strict';

angular.module('angular.bootstrap.users')
.controller('UsersCtrl',usersCtrl);

usersCtrl.$inject = ['$scope','users','API'];

function usersCtrl($scope,users,API){
	/*jshint validthis: true */
	var vm = this;
	vm.users = users.data;



	$scope.addUser = function(){
		var gender = (vm.gender)?'Male':'Female';
		API.post('user',{
				name    :vm.name,
				surname :vm.surname,
				gender  :gender
		}).success(function(data){
			debugger;
			vm.users.push(data);
		});
	};
};