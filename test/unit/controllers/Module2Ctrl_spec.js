'use strict';

describe('Controller: Module2MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angular.bootstrap'));

  var Module2MainCtrl,$location,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    $location = _$location_;
    Module2MainCtrl = $controller('Module2MainCtrl', {
      $scope: scope
    });
  }));

  it('Module2MainCtrl is defined', function () {
    expect(Module2MainCtrl).not.toBe(null);
  });
});
