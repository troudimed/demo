
(function () {
    'use strict';

    angular.module('angular1js').factory('wishService', wishService);

    /** @ngInject */
    function wishService($http, $q, $timeout/*, config*/) {

        var service = {
            wishlist: wishlist
        };
        return service;

        function wishlist() {
            
            var deferred = $q.defer();
            var storedToken = JSON.parse(localStorage.getItem('token'));
            var token = (storedToken && (storedToken.access_token)) ? storedToken.access_token : '';
            return $http({
                 method: 'GET',
                 url: 'http://localhost:8081/api/wish',
                 headers: {'Authorization': 'Bearer '+token}    
                            })
                .success(function (data, status) {
 
                    deferred.resolve(data);
                    return deferred.$promise ;
                });
        }

    }

})();