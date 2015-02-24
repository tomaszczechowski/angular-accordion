(function() {
  'use strict';

  var app = angular.module('accordion');

  app.directive('accordion', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        id: '@',
        oneOpen: '@',
        openClass: '@',
        closeClass: '@'
      },
      controller: 'accordion',
      templateUrl: '/accordion/views/accordion.html'
    };
  });
})();
