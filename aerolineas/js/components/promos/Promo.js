import { GenericModel } from '../GenericModel';
/**
 * promos class: This class is in charge to manage the attributes for a promos
 * This class is the same as a pojo in JAVA, a poco in C#, etc
 * This class must not have binding to the UI
 * The view or UI component use this to store data, manage state, etc.
 * @param {object} attributes
 */
export var Promo = function(attributes) {
    this.attributes = attributes;
    this.initialize.apply(this, arguments);
};

Promo.prototype = GenericModel.prototype;

/**
 * This method is an example about calling a metho with apply in a constructor
 */
Promo.prototype.initialize = function() {
    //console.log("initializing model promos with data", arguments);
};