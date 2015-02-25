(function() {
  'use strict';

  var app = angular.module('accordion');

  app.directive('accordionItem', function() {
    return {
      restrict: 'EA',
      require: '^accordion',
      replace: true,
      transclude: true,
      scope: {
        initOpen: '@',
        header: '@'
      },
      controller: 'item',
      templateUrl: '/accordion/views/item.html',
      link: function (scope, element, attrs, accordionCtrl) {
        scope.initMe(accordionCtrl.getId());
      }
    };
  });
})();