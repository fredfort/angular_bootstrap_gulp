'use strict';

describe('Controller: Module3MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angular.bootstrap'));

  var Module3MainCtrl,$location,scope;



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    var module3Error = {};//Mock resolved dependencies
    $location = _$location_;
    Module3MainCtrl = $controller('Module3MainCtrl', {
      $scope: scope,
      module3Error: module3Error
    });
  }));

  it('Module3MainCtrl is defined', function () {
    expect(Module3MainCtrl).not.toBe(null);
  });
});