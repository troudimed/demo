(function () {
  'use strict';

  angular
    .module('angular1js')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $window, $uiRouter) {
    //$window['ui-router-visualizer'].visualizer($uiRouter);
    $log.debug('runBlock end');
  }

})();
