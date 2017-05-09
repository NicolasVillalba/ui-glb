//app.js

//This the data I will fill the model
var promo = {
    "image":"img/calafate.jpg",
    "description": "Llegá volando a El Calafate. Más rápido, más cómodo, más cuotas.",
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "payment":"/es-ar/reservasservicios/vuelo/139_buenos-aires-mar-del-plata",
    "currency": "ARS",
    "currencySymbol": "$"
};

// Creating view to render
var promoView = new PromoView({
    el: '#promos',
    model: new Promo(promo)
});

//As I set attributes to the view I just render its content
promoView.render();