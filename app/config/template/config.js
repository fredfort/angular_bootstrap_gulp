'use strict';

angular.module('angular.bootstrap')
.constant('config', {
    environment: '@@environment',
    app: {
        home: '@@app.baseUrl'
    },
    api: {
        baseUrl: '@@api.baseUrl'
        
    }
});