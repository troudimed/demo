(function () {
    'use strict';

    /** @ngInject */
    function MainController() {

        activate();

        function activate() {

        }

    }

    angular.module('angular1js').component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController,
        bindings: {

        }
    });

})();