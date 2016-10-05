(function () {
    'use strict';

    angular.module('app.production.config', [])
        .constant('LinConfig', {
            'apiUrl': '/api/heroes'
        });
})();