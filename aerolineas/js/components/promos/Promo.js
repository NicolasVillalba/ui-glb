/**
 * Promo class: This class is in charge to manage the attributes for a Promo
 * This class is the same as a pojo in JAVA, a poco in C#, etc
 * This class must not have binding to the UI
 * The view or UI component use this to store data, manage state, etc.
 * @param {object} attributes 
 */
var Promo = function(attributes) {
    this.attributes = attributes;
    this.initialize.apply(this, arguments);
}

/**
 * default getter
 */
Promo.prototype.get = function(attribute) {
    return this.attributes[attribute];
}

/**
 * default setter
 */
Promo.prototype.set = function(attribute, value) {
    if(this.attributes.hasOwnProperty(attribute)){
        this.attributes[attribute] = value || '';   
    }
}

/**
 * This method is an example about calling a metho with apply in a constructor
 */
Promo.prototype.initialize = function() {
    console.log("initializing model Promo with data", arguments);
}