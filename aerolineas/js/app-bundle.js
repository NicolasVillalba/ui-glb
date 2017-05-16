/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Promo = undefined;

var _GenericModel = __webpack_require__(3);

/**
 * promos class: This class is in charge to manage the attributes for a promos
 * This class is the same as a pojo in JAVA, a poco in C#, etc
 * This class must not have binding to the UI
 * The view or UI component use this to store data, manage state, etc.
 * @param {object} attributes
 */
var Promo = exports.Promo = function Promo(attributes) {
  this.attributes = attributes;
  this.initialize.apply(this, arguments);
};

Promo.prototype = _GenericModel.GenericModel.prototype;

/**
 * This method is an example about calling a metho with apply in a constructor
 */
Promo.prototype.initialize = function () {
  //console.log("initializing model promos with data", arguments);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PromoView = undefined;

var _loadTemplate = __webpack_require__(4);

/**
 * PromoView class
 * Handles Rendering, events and different stuff of a UI Component
 * This class is the glue between a model and the DOM
 * This class should only manage user interactions, and updates a model, 
 * without applying business logic
 * @param {object} attributes 
 */
var PromoView = exports.PromoView = function PromoView(attributes) {
    this.model = attributes.model;
    this.$el = document.querySelector(attributes.el);
};

/**
 * This method is an example about calling a metho with apply in a constructor
 * In this case, we can use it as a event binding.
 */
PromoView.prototype.initialize = function () {
    console.log("initializing View PromoView with data", arguments);
};

/**
 * Render method, given a template, renders a Component content
 * This can be as complex as you want
 */
PromoView.prototype.render = function () {

    this.$el.appendChild(this.template());
};

/**
 * Builds a template from layout, attaching model to its container
 */
PromoView.prototype.template = function () {

    var data = {};

    for (var field in this.model.attributes) {
        data[field] = this.model.attributes[field];
    }

    var container = document.createElement('div');

    container.setAttribute('class', data.image ? 'promo-content' : 'short-promo-content promo-content');

    (0, _loadTemplate.LoadTemplate)(data.image ? './js/components/promos/layouts/promo.tpl' : './js/components/promos/layouts/short-promo.tpl').then(function (tpl) {
        return tpl.replace(/{{ (.*?) }}/g, function (match, token) {
            return data[token];
        });
    }).then(function (tpl) {
        return container.innerHTML = tpl;
    }).catch(function (error) {
        return console.log(error);
    });

    return container;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promo = __webpack_require__(0);

var _PromoView = __webpack_require__(1);

//This the data I will fill the model
//ES6 imports
var promo = {
    "image": "img/calafate.jpg",
    "description": "Llegá volando a El Calafate. Más rápido, más cómodo, más cuotas.",
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "payment": "/es-ar/reservasservicios/vuelo/139_buenos-aires-mar-del-plata",
    "currency": "ARS",
    "currencySymbol": "$"
};

var shortpromo = {
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "payment": "/es-ar/reservasservicios/vuelo/139_buenos-aires-mar-del-plata",
    "currency": "ARS",
    "currencySymbol": "$"
};

// Creating view to render
var promoView = new _PromoView.PromoView({
    el: '#promos',
    model: new _Promo.Promo(shortpromo)
});

//As I set attributes to the view I just render its content
promoView.render();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by nico on 26/04/17.
 */

var GenericModel = exports.GenericModel = function GenericModel() {};

GenericModel.prototype = {

    /**
     * Setter method
     */
    get: function get(attribute) {
        return this.attributes[attribute];
    },

    /**
     * Getter method
     */
    set: function set(attribute, value) {
        this.attributes[attribute] = value || '';
    },

    /**
     * To String method
     * @returns {string}
     */
    toString: function toString() {
        var result = '';
        for (var attributes in this.attributes) {
            result += String(this.attributes[attributes]);
        }
        return result;
    }

};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadTemplate = LoadTemplate;
/**
 * Created by nico on 09/05/17.
 */
function LoadTemplate(url) {
    return new Promise(function (resolve, reject) {

        var rq = new XMLHttpRequest();

        rq.open('get', url, true);

        rq.onload = function () {
            if (rq.status == 200) resolve(rq.response);else reject("Error loading page\n");
        };

        rq.onerror = function () {
            reject(Error('Error'));
        };
        rq.send();
    });
};

/***/ })
/******/ ]);
//# sourceMappingURL=app-bundle.js.map