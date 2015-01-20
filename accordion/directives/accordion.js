(function() {
  'use strict';

  var app = angular.module('accordion');

  app.directive('accordion', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        oneOpen: '@',
        openClass: '@',
        closeClass: '@'
      },
      controller: 'accordion',
      templateUrl: 'scripts/accordion/views/accordion.html'
    };
  });
})();
