(function () {
    'use strict';

    /** @ngInject */
    function HomeController() {
        activate();

        function activate() {

        }

    }

    angular.module('angular1js').component('home', {
        templateUrl: 'app/home/home.html',
        controller: HomeController,
        bindings: {

        }
    });

})();