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
    it('should create a div element with with className promo-content', () => {

        let templateResult = promoView.template(promoView.model);

        expect(templateResult instanceof Node).toBe(true);

        expect(templateResult.tagName).toBe('DIV');

        expect(templateResult.className).toBe('promo-content');

    })
});