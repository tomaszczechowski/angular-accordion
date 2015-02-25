(function() {
  'use strict';

  var app = angular.module('accordion');

  var AccordionCollection = function () {
    this._accordions = [];
  };
  
  AccordionCollection.prototype = {
    add: function (accordion) {
      this._accordions.push(accordion);
    },
    
    find: function (id) {
      for (var i = 0; i < this._accordions.length; i++) {
        if (this._accordions[i].getId() === id) {
          return this._accordions[i];
        }
      }
      
      return null;
    }
  };
    
  var Accordion = function (options) {
    this._id = options.id;  
    this._oneOpen = options.oneOpen || true;
	  this._openClass = options.openClass || 'open';
		this._closeClass = options.closeClass || 'close';
		this._items = [];
  };
  
  Accordion.prototype = {
    getId: function () {
      return this._id;
    },
    
    setOneOpen: function (_value) {
  		this._oneOpen = _value;
  	},

  	getOneOpen: function () {
  		return this._oneOpen;
  	},

  	setOpenClass: function (_class) {
  		this._openClass = _class;
  	},

  	getOpenClass: function () {
  		return this._openClass;
  	},

  	setCloseClass: function (_class) {
  		this._closeClass = _class;
  	},

  	getCloseClass: function () {
  		return this._closeClass;
  	},
  	
  	addItem: function (options) {
  	  var item = new ItemModel({
  			open: options.open,
  			header: options.header
  		});

    	this._items.push(item);

  		return item;
  	},
  	
  	closeItems: function () {
  	  for (var i = 0; i < this._items.length; i++) {
  	    this._items[i].close();
  	  }
  	}
  };
  
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
    
  app.service('AccordionService', function() {
    var Collection = new AccordionCollection();
    
  	return {
  	  add: function (options) {
  	    var accordion = new Accordion({
  	      id: options.id, 
  	      oneOpen: options.oneOpen,
  	      openClass: options.openClass,
  	      closeClass: options.closeClass
  	    });
  	    
  	    Collection.add(accordion);
  	  },
  	  
    	get: function (id) {
    	  return Collection.find(id);
    	}
    };
  });
})();