(function () {
  'use strict';


  /** @ngInject */
  function NavbarController($uibModal, $log) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.openContactModal = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        component: 'contactModal',
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
        $log.info('selected:' + selectedItem);
      }, function () {
        $log.info('modal-component dismissed at: ' + new Date());
      });
    };



  }


  angular
    .module('angular1js')
    .component('acmeNavbar', {
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      bindings: {

      }
    });




})();
