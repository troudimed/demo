(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib

  }

})();
