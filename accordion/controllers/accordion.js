(function () {
	'use strict';

	var app = angular.module('accordion');

	app.controller('accordion', function ($scope, AccordionService) {
		if ($scope.openClass) {
			AccordionService.setOpenClass($scope.openClass);
		}

		if ($scope.closeClass) {
			AccordionService.setCloseClass($scope.closeClass);
		}

		if ($scope.oneOpen) {
			var oneOpen = $scope.oneOpen === 'true';
			AccordionService.setOneOpen(oneOpen);
		}
	});

})();