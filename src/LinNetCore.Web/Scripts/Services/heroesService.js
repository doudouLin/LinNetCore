(function () {
    'use strict';

    var heroesService = angular.module('heroesService', ['ngResource', 'app.development.config']);

    //heroesService.$inject = ['$scope', 'myConfig'];

    heroesService.factory('Heroes', ['$resource', 'LinConfig',
        function ($resource, LinConfig) {
            return $resource(LinConfig.apiUrl, {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }
    ]);
})();