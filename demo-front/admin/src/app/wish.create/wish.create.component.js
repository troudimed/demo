(function () {
    'use strict';

    /** @ngInject */
    function WishCreateController(wishService, $stomp, toastr) {
        var vm = this;
        // INIT VARS
        var vm = this;
        vm.titleWish = "";
        vm.descriptionWish = "";

        // FUNCTIONS
        vm.doLogin = function () {
            wishService.createWish(vm.titleWish, vm.descriptionWish).then(function () {
               toastr.info('The wish has been added successfully') ;
            }, function (error) {
                toastr.info('Error when adding new wish') ;
            });
        }


    }

    angular.module('angular1js').component('wishCreateComponent', {
        templateUrl: 'app/wish.create/wish.create.html',
        controller: WishCreateController,
        bindings: {
            title: '<'
        }
    });

})();