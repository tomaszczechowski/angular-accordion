(function() {
  'use strict';

  var app = angular.module('accordion');

  app.service('AccordionService', function() {
  	var _oneOpen 		= true
  		, _openClass 	= 'open'
  		, _closeClass = 'close';

    return {
    	setOneOpen: function (_value) {
    		_oneOpen = _value;
    	},

    	getOneOpen: function () {
    		return _oneOpen;
    	},

    	setOpenClass: function (_class) {
    		_openClass = _class;
    	},

    	getOpenClass: function () {
    		return _openClass;
    	},

    	setCloseClass: function (_class) {
    		_closeClass = _class;
    	},

    	getCloseClass: function () {
    		return _closeClass;
    	}
    };
  });
})();