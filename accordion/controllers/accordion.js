(function () {
	'use strict';

	var app = angular.module('accordion');

	app.controller('accordion', function ($scope, AccordionService) {
		var options = {
			id: $scope.id
		};
		
		if ($scope.openClass) {
			options.openClass = $scope.openClass;
		}

		if ($scope.closeClass) {
			options.closeClass = $scope.closeClass;
		}

		if ($scope.oneOpen) {
			var oneOpen = $scope.oneOpen === 'true';
			options.oneOpen = oneOpen;
		}
		
		AccordionService.add(options);
		
		this.getId = function () {
			return $scope.id;
		};
		
	});

})();