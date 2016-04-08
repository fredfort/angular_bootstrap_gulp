'use strict';

describe('Controller: Module1MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angular.bootstrap'));

  var Module1MainCtrl,$location,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    var module1Data = [{step:'init',   res: 'OK'},
                      {step:'test',   res: 'OK'},
                      {step:'result', res:'OK'}];//Mock resolved dependencies
    
    $location = _$location_;
    
    Module1MainCtrl = $controller('Module1MainCtrl', {
      $scope: scope,
      module1Data: module1Data
    });
  }));

  it('Module1MainCtrl is defined', function () {
    expect(Module1MainCtrl).not.toBe(null);
  });

});