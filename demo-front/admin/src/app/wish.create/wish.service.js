
(function () {
    'use strict';

    angular.module('angular1js').factory('wishService', wishService);

    /** @ngInject */
    function wishService($http, $q, $timeout/*, config*/) {

        var service = {
            createWish: createWish
        };
        return service;

        function createWish(title, description) {
            var body = { title: title, description: description };
            
            var deferred = $q.defer();
            var storedToken = JSON.parse(localStorage.getItem('token'));
            var token = (storedToken && (storedToken.access_token)) ? storedToken.access_token : '';
            return $http({
                 method: 'POST',
                 url: 'http://localhost:8081/api/wish',
                 data: body,
                 headers: {'Authorization': 'Bearer '+token, 'content-type': 'application/json'}    
                            })
                .success(function (data, status) {
 
                    deferred.resolve(data);
                    return deferred.$promise ;
                });
        }

    }

})();