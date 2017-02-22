(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var home = {
      parent: 'main',
      name: 'home',
      url: '/home',
      component: 'home',
      resolve: {
        security: ['$q', 'loginService','$state', function ($q, loginService,$state) {
          loginService.account().then(
            function (data) {
              return $q.resolve("Authorized");
            },
            function (error) {
              $state.go('login');
            }
          )
        }]
      }
    };
    $stateProvider.state(home);
  }

})();
