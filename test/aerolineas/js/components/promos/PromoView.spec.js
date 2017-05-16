/**
 * Created by nico on 15/05/17.
 */
import { Promo } from '../../../../../aerolineas/js/components/promos/Promo';
import { PromoView } from '../../../../../aerolineas/js/components/promos/PromoView';

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

describe('promos object creation and property manipulation', () => {
    let promoView = new PromoView({
        model: new Promo(promo),
        el: '#test'
    });
    it('should contain a div element', () => {
        let el = document.createElement('div');
        expect(typeof promoView.template()).toBe(typeof el)
    })
});