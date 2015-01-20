(function () {
	'use strict';

	var app = angular.module('accordion');

	app.controller('item', function ($scope, AccordionService, AccordionItemService) {
		var model = AccordionItemService.add(!!$scope.initOpen, $scope.header);

		$scope.toggleOpen = function () {
			var isOpen = model.isOpen();

			if (!isOpen && AccordionService.getOneOpen()) {
				AccordionItemService.closeAll();
			}

			model.isOpen()
				? model.close()
				: model.open();
		};

		$scope.getCssClasses = function () {
			return model.isOpen()
				? AccordionService.getOpenClass()
				: AccordionService.getCloseClass();
		};
	});

})();