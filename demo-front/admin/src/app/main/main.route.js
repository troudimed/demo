(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var main = {
      name: 'main',
      component: 'main'
    };
    $stateProvider.state(main);
  }

})();
