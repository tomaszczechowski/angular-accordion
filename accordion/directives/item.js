(function() {
  'use strict';

  var app = angular.module('accordion');

  app.directive('accordionItem', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        initOpen: '@'
      },
      controller: 'item',
      templateUrl: 'scripts/accordion/views/item.html'
    };
  });
})();