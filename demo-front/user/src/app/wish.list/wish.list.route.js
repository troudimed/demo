(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var userList = {
      parent: 'main',
      name: 'wishList',
      url: '/wishList',
      component: 'wishListComponent',
      resolve: {
        title: function () {
          return "List of wish:"
        },
        security: ['$q', 'loginService', '$state', function ($q, loginService, $state) {
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
    $stateProvider.state(userList);
  }

})();
