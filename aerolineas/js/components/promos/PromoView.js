/**
 * PromoView class
 * Handles Rendering, events and different stuff of a UI Component
 * This class is the glue between a model and the DOM
 * This class should only manage user interactions, and updates a model, 
 * without applying business logic
 * @param {object} attributes 
 */
var PromoView = function(attributes) {
    this.model = attributes.model;
    this.$el = document.querySelector(attributes.el);
};

/**
 * This method is an example about calling a metho with apply in a constructor
 * In this case, we can use it as a event binding.
 */
PromoView.prototype.initialize = function() {
    console.log("initializing View PromoView with data", arguments);
};

/**
 * Render method, given a template, renders a Component content
 * This can be as complex as you want
 */
PromoView.prototype.render = function() {

    this.$el.appendChild(this.template());

};

/**
 * Builds a template from layout, attaching model to its container
 */
PromoView.prototype.template = function() {

    let data = {};

    for(let field in this.model.attributes){
        data[field] = this.model.attributes[field];
    }

    let container = document.createElement('div');

    container.setAttribute('class', data.image ?'promo-content':'short-promo-content promo-content');

    LoadTemplate(data.image ? './js/components/promos/layouts/promo.tpl' : './js/components/promos/layouts/short-promo.tpl')
        .then((tpl) => tpl.replace(/{{ (.*?) }}/g, function(match, token) {
            return data[token];
        }))
        .then((tpl) => container.innerHTML = tpl)
        .catch((error) => console.log(error));

    return container;
};