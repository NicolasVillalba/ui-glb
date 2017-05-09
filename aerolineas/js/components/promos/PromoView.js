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
Promo.prototype.initialize = function() {
    //console.log("initializing View Promo with data", arguments);
};

/**
 * Render method,
 * given a template, renders a Component content
 * This can be as complex as you want
 */
PromoView.prototype.render = function() {
    var container = document.createElement('div');
    container.setAttribute('class', this.model.get('image')?'promo-content':'short-promo-content promo-content')
    container.innerHTML = this.template();
    this.$el.appendChild(container);
};

/**
 * Builds a tamplate layout, attaching model to its container 
 */
PromoView.prototype.template = function() {

    let image =       this.model.get('image');
    let destination = this.model.get('destination');
    let description = this.model.get('description');
    let price =       this.model.get('price');
    let payment =     this.model.get('payment');

    /*let promoLayout = `
        ${this.model.get('image')?'<div class="cols left md-6 promo-image"><img src="img/neuquen.gif" alt="Imagen el Calafate" /></div>':''}
        <div class="${this.model.get('image')?'cols left md-6 promo-info':'short-promo-content promo-content'}">
            <span class="promo-origin">${this.model.get('origin')}</span>
            <h2 class="aa-color promo-title promo-destination">${this.model.get('destination')}</h2>
            ${this.model.get('image')?`<p class="promo-description"> ${this.model.get('description')}</p>`:''}
            <span class="promo-purchase-title">Tarifa:</span>
            <span class="aa-color promo-price">${this.model.get('price')}</span>
            <a class="aa-color promo-purchase" href="${this.model.get('payment')}">Comprar</a>
        </div>
`;*/

    let promoLayout = Template('./js/components/promos/templates/promo.tpl')
        .then((tpl) => tpl)
        .catch((e) => console.log('Error'));

    return promoLayout;
};