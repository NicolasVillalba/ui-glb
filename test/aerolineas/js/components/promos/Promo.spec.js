/**
 * Created by nico on 15/05/17.
 */
import { Promo } from '../../../../../aerolineas/js/components/promos/Promo';

describe('promos object creation and property manipulation', () => {
    let promo = new Promo({name: 'nico', age:33});
    it('should contain a property called name', () => {
        expect(promo.get('name')).toBe('nico')
    });

    it('should contain two properties', () => {
        expect(Object.keys(promo.attributes).length).toBe(2)
    });
});