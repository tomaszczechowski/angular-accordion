(function() {
  'use strict';

  var app = angular.module('accordion');

  app.service('AccordionItemService', function() {
  	var _items = {};
  	
  	var ItemModel = function (options) {
  		this._open = options.open;
  		this._header = options.header;
  	};

  	ItemModel.prototype = {
  		open: function () {
  			this._open = true;
  		},

  		close: function () {
  			this._open = false;
  		},

  		isOpen: function () {
  			return this._open;
  		}
  	};

    return {
    	add: function (id, open, header) {
    		var item = new ItemModel({
    			open: open,
    			header: header
    		});

    		_items.push(item);

    		return item;
    	},

    	get: function (index) {
    		return _items[index];
    	},

    	closeAll: function () {
    		for (var i = 0; i < _items.length; i++) {
    			_items[i].close();
    		};
    	}
    };
  });
})();