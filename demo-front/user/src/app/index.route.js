(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }

})();
