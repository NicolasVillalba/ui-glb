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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Promo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenericModel__ = __webpack_require__(3);

/**
 * Promo class: This class is in charge to manage the attributes for a Promo
 * This class is the same as a pojo in JAVA, a poco in C#, etc
 * This class must not have binding to the UI
 * The view or UI component use this to store data, manage state, etc.
 * @param {object} attributes
 */
var Promo = function (attributes) {
  this.attributes = attributes;
  this.initialize.apply(this, arguments);
};

Promo.prototype = __WEBPACK_IMPORTED_MODULE_0__GenericModel__["a" /* GenericModel */].prototype;

/**
 * This method is an example about calling a metho with apply in a constructor
 */
Promo.prototype.initialize = function () {
  //console.log("initializing model Promo with data", arguments);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__load_template__ = __webpack_require__(4);

/**
 * PromoView class
 * Handles Rendering, events and different stuff of a UI Component
 * This class is the glue between a model and the DOM
 * This class should only manage user interactions, and updates a model, 
 * without applying business logic
 * @param {object} attributes 
 */
let PromoView = function (attributes) {
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

    let data = {};

    for (let field in this.model.attributes) {
        data[field] = this.model.attributes[field];
    }

    let container = document.createElement('div');

    container.setAttribute('class', data.image ? 'promo-content' : 'short-promo-content promo-content');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__load_template__["a" /* LoadTemplate */])(data.image ? './js/components/promos/layouts/promo.tpl' : './js/components/promos/layouts/short-promo.tpl').then(tpl => tpl.replace(/{{ (.*?) }}/g, function (match, token) {
        return data[token];
    })).then(tpl => container.innerHTML = tpl).catch(error => console.log(error));

    return container;
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_promos_Promo__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_promos_PromoView__ = __webpack_require__(1);
//app.js

//imports ES6



//This the data I will fill the model
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
var promoView = new __WEBPACK_IMPORTED_MODULE_1__components_promos_PromoView__["a" /* PromoView */]({
    el: '#promos',
    model: new __WEBPACK_IMPORTED_MODULE_0__components_promos_Promo__["a" /* Promo */](promo)
});

//As I set attributes to the view I just render its content
promoView.render();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericModel; });
/**
 * Created by nico on 26/04/17.
 */

let GenericModel = function () {};

GenericModel.prototype = {

    /**
     * Setter method
     */
    get: function (attribute) {
        return this.attributes[attribute];
    },

    /**
     * Getter method
     */
    set: function (attribute, value) {
        this.attributes[attribute] = value || '';
    },

    /**
     * To String method
     * @returns {string}
     */
    toString: function () {
        let result = '';
        for (let attributes in this.attributes) {
            result += String(this.attributes[attributes]);
        }
        return result;
    }

};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadTemplate;
/**
 * Created by nico on 09/05/17.
 */
function LoadTemplate(url) {
    return new Promise((resolve, reject) => {

        let rq = new XMLHttpRequest();

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