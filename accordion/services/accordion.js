(function() {
  'use strict';

  var app = angular.module('accordion');

  app.service('AccordionService', function() {
    var AccordionCollection = function () {
      this._items = [];
    };
    
    AccordionCollection.prototype = {
      add: function (accordion) {
        this._items.push(accordion);
      },
      
      find: function (id) {
        for (var i = 0; i < this._items.length; i++) {
          if (this._items[i].getId() === id) {
            return this._items[i];
          }
        }
        
        return null;
      }
    };
    
    var Accordion = function (options) {
      this._id = options.id;  
      this._oneOpen 	 = options.oneOpen || true;
  	  this._openClass  = options.openClass || 'close';
  		this._closeClass = options.closeClass || 'close';
    };
    
    Accordion.prototype = {
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
    	}
    };
    
  	return {
  	  add: function (options) {
  	    var accordion = new Accordion({
  	      id: options.id, 
  	      oneOpen: options.oneOpen,
  	      openClass: options.openClass,
  	      closeClass: options.closeClass
  	    });
  	    
  	    AccordionCollection.add(accordion);
  	  },
  	  
    	get: function (id) {
    	  return AccordionCollection.find(id);
    	}
    };
  });
})();