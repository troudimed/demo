(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var login = {
      name: 'login',
      url: '/login',
      component: 'login'
    };
    $stateProvider.state(login);
  }

})();
