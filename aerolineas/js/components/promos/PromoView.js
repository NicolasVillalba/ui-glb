/**
 * PromoView class
 * Handles Rendering, events and differents stuff of a UI Component
 * This class is the glue between a model and the DOM
 * This class should only manage user interactions, and updates a model, 
 * without applying business logic
 * @param {object} attributes 
 */
var PromoView = function(attributes) {
    this.attributes = attributes;
    this.$el = document.querySelector(attributes.el);
};

PromoView.prototype = GenericModel.prototype;

/**
 * This method is an example about calling a metho with apply in a constructor
 * In this case, we can use it as a event binding.
 */
Promo.prototype.initialize = function() {
    console.log("initializing View Promo with data", arguments);
};

/**
 * Render method,
 * given a template, renders a Component content
 * This can be as complex as you want
 */
PromoView.prototype.render = function() {
    var container = document.createElement('div');
    container.innerHTML = this.template();
    this.$el.appendChild(container.firstChild);
};

/**
 * Builds a tamplate layout, attaching model to its container 
 */
PromoView.prototype.template = function() {
    return `<div>
                <div>${this.get("model").get("origin")} </div>
                <div>${this.get("model").get("destination")}</div></div>
                <span>${this.get("model").get("price")}</span>
            </div>`;
};