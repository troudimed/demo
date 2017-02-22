(function () {
    'use strict';

    /** @ngInject */
    function WishListController(wishService, $stomp, toastr) {
        var vm = this;

        activate();

        function activate() {
            vm.rowCollection = []
            wishService.wishlist().then(function (response) {
                vm.rowCollection = response.data;
            }, function () {
            });

            vm.getters = {
                title: function (value) {
                    //this will sort by the length of the first name string
                    return value.title.length;
                }
            } ;

            $stomp.setDebug(function (args) {
                console.debug(args);
            });

            $stomp
                .connect('http://127.0.0.1:8081//wish/notification')
                .then(function (frame) {
                    var subscription = $stomp.subscribe('/topic/events', function (res) {
                        console.log(' the response is  ' + JSON.stringify(res));

                        toastr.info('New has been added', 'Title : res.wishDto.title');

                        vm.rowCollection.push(res);
                    });
                })
            
        }

    }

    angular.module('angular1js').component('wishListComponent', {
        templateUrl: 'app/wish.list/wish.list.html',
        controller: WishListController,
        bindings: {
            title: '<'
        }
    });

})();