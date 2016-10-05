(function () {
    'use strict';

    angular
        .module('heroesApp')
        .controller('heroesController', heroesController);

    heroesController.$inject = ['$scope', 'Heroes'];


    function heroesController($scope, Heroes) {
        
        $scope.Heroes = Heroes.query();

        var someData = {
            firstName: 'HONGJUAN',
            Name: 'lin',
            EnterDate: new Date(2016, 8, 2),
            consumption: 123.659855,
            plan: 'super-plasn',
            message: 'what is up'
        };

        $scope.data = someData;

        $scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive'];

        $scope.len = 0;

        $scope.clickMe = function () {
            $scope.len = $scope.len + 1;

            var paymentService = null;
            try {
                paymentService.payForItem();
            }
            catch (e) {
                // alert user to the error
                alert("sth. wrong!");
                //showSomeFriendlyFeedback();
                // Trasmit the error to the server
                //log(1, "001: The user was unable to complete his purchase");
            }
        }
}

    angular
        .module('heroesApp')
        .directive('colorList', function () {
            return {
                restrict: 'AE',
                template:
                    "<button ng-click='showHideColors()' type='button'>"
                    + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
                    + "</button><div ng-hide='isHidden' id='colorContainer'>"
                    + "</div>",
                link: function ($scope, $element) {
                    // set default state of hide/show
                    $scope.isHidden = true;
                    // add function to manage hide/show state
                    $scope.showHideColors = function () {
                        $scope.isHidden = !$scope.isHidden;
                    }
                    // DOM manipulation
                    var colorContainer = $element.find('div');
                    angular.forEach($scope.colorsArray, function (color) {
                        var appendString = "<div style='background-color:" + color + "'>" + color + "</div>";
                        colorContainer.append(appendString);
                    });
                }
            }
        });
})();