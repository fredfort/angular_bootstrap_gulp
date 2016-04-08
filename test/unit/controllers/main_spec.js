'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angular.bootstrap'));

  var MainCtrl,$location,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    $location = _$location_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('MainCtrl is defined', function () {
    expect(MainCtrl).not.toBe(null);
  });

  it('MainCtrl is at the origin path', function () {
    expect($location.path()).toBe('');
  });

  it('MainCtrl data is initialized', function () {
    expect(scope.data.environment).toBe('dev');
  });




});
