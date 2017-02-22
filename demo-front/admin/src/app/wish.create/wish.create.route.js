(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var userList = {
      parent: 'main',
      name: 'wishCreate',
      url: '/wishCreate',
      component: 'wishCreateComponent',
      resolve: {
        title: function () {
          return "Create  of wish:"
        }
      }
    };
    $stateProvider.state(userList);
  }

})();
