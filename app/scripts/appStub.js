angular.module('appStub', [
    'angular.bootstrap',
    'ngMockE2E'
]).config(function($httpProvider){
     $httpProvider.interceptors.push('HttpStubInterceptor');

}).run(function(config, $httpBackend,$http,GetJsonFile){

    //where local files can be found 
    var resourcesPath = 'http://localhost:3005/';

    /*
    * USERS mock
    */

    //Catch all request matching the following rest/users([0-9])
    $httpBackend.whenGET(config.api.baseUrl+ 'users').respond(
        function(method,url){
            return [200,GetJsonFile.synchronously(resourcesPath+'users/get.json')];
        }
    );


    //Catch all request matching the following rest/users([0-9])
    var regexp = new RegExp(config.api.baseUrl+ 'users/([0-9]+)');
    $httpBackend.whenGET(regexp).respond(
        function(method,url){
            var mockId = url.match(regexp)[1];
            return [200,GetJsonFile.synchronously(resourcesPath+'users/get'+mockId+'.json')];
        }
    );

    /*
    * Module 2 mock
    */
    $httpBackend.whenGET(config.api.baseUrl+ 'module2').respond(
        function(method,url){
            return [200,GetJsonFile.synchronously(resourcesPath+'users/get.json')];
        }
    );

    /*
    * Module 3 mock
    */
    $httpBackend.whenGET(config.api.baseUrl+ 'module3').respond(
        function(method,url){
            return [200,GetJsonFile.synchronously(resourcesPath+'users/get.json')];
        }
    );

    /*
    * For all POST call just send back the data created
    */
    $httpBackend.whenPOST(/.*/).respond(
        function(method,url, data){
            var toReturn = JSON.parse(data);
            toReturn.id = new Date().getTime();
            return [200,toReturn];
        }
    );


    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
});

angular.module('appStub').service('HttpStubInterceptor', function($q, $timeout){
    var getMockedAsyncRespondTime = function (url) {
        switch (url.split(/\./).pop()) {
            case 'json':
                return 300;
            case 'html':
                // In production all views are into cachedUrl as JS Templates
                return 0;
            default:
                // Web Services
                return 2000;
        }
    };
    return {
        response: function (response) {
            var defer = $q.defer();
            $timeout(function () {
                defer.resolve(response);
            }, getMockedAsyncRespondTime(response.config.url.toString()));
            return defer.promise;
        }
    };
});

angular.module('appStub').service('GetJsonFile', function(){
    this.synchronously = function(url){
        var request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send(null);
        return request.response;
    };
});