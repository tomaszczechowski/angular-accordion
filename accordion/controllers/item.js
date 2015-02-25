(function () {
	'use strict';

	var app = angular.module('accordion');

	app.controller('item', function ($scope, AccordionService) {
		var Accordion, itemModel;
		
		$scope.initMe = function (id) {
			Accordion = AccordionService.get(id);

			itemModel = Accordion.addItem({
				open: !!$scope.initOpen, 
				header: $scope.header
			});
		};
		
		$scope.toggleOpen = function () {
			var isOpen = itemModel.isOpen();

			if (!isOpen && Accordion.getOneOpen()) {
				Accordion.closeItems();
			}

			itemModel.isOpen()
				? itemModel.close()
				: itemModel.open();
		};

		$scope.getCssClasses = function () {
			return itemModel.isOpen()
				? Accordion.getOpenClass()
				: Accordion.getCloseClass();
		};
	});

})();