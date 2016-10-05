(function () {
    'use strict';

    angular.module('app.development.config', [])
        .constant('LinConfig', {
            'apiUrl': '/api/heroes'
        });
})();