//ES6 imports
import { Promo } from './components/promos/Promo';
import { PromoView } from './components/promos/PromoView';

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

var shortpromo = {
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
    model: new Promo(shortpromo)
});

//As I set attributes to the view I just render its content
promoView.render();