(function () {
    'use strict';

    angular.module('angular1js').factory('loginService', loginService);

    /** @ngInject */
    function loginService($http, $q, $timeout, $localStorage) {

        var service = {
            login: login,
            account: account
        };
        return service;

        function login(login, password) {

            var deferred = $q.defer();
            var params = { username: login, password: password };
            return $http({
                method: 'POST',
                url: 'http://localhost:8081/api/authenticate',
                params: params
            })
                .success(function (data, status) {
                    localStorage.setItem('token', JSON.stringify(data));
                    deferred.resolve(data);
                    return deferred.$promise;
                });
        }

        function account() {

            var deferred = $q.defer();
            var storedToken = JSON.parse(localStorage.getItem('token'));
            var token = (storedToken && (storedToken.access_token)) ? storedToken.access_token : '';
            return $http({
                method: 'GET',
                url: 'http://localhost:8081/api/account',
                headers: { 'Authorization': 'Bearer ' + token }
            })
                .success(function (data, status) {
                    deferred.resolve(data);
                    return deferred.$promise;
                });
        }

    }

})();