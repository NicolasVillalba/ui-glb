/**
 * Created by nico on 26/04/17.
 */
let GenericModel = function (attributes) {
    this.attrs = attributes;
};

GenericModel.prototype = {

    /**
     * Setter method
     */
    get: function(attribute) {
        return this.attrs[attribute];
    },

    /**
     * Getter method
     */
    set: function(attribute, value) {
        this.attrs[attribute] = value || '';
    },

    /**
     * To String method
     * @returns {string}
     */
    toString: function () {
        let result = '';
        for(let attributes in this.attrs){
            result += this.attrs[attributes];
        }
        return result;
    }

};