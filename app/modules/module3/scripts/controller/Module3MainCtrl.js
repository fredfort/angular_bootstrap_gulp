'use strict';

angular.module('angular.bootstrap.module3')
.controller('Module3MainCtrl',module3MainCtrl);

module3MainCtrl.inject = ['module3Error'];

function module3MainCtrl(module3Error){
	/*jshint validthis: true */
	var vm = this;
	vm.module3Error = module3Error.data;
}