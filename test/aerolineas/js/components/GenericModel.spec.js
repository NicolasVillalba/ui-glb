/**
 * Created by nico on 15/05/17.
 */


import  { GenericModel } from '../../../../aerolineas/js/components/GenericModel';

describe('Generic Model test', () =>{

    let genericModel = new GenericModel();

    describe('calling prototypes methods on a literal ', () =>{

        var o = {attributes: {other: "property"}};

        genericModel.set.call(o, 'hello', 'world');

        it('should have hello prop', () =>{
            expect(o.attributes.hello).toBe('world')
        });

       it('should return the string "property"', () => {
           expect(genericModel.get.call(o, 'other')).toBe('property')
        })
    })
});