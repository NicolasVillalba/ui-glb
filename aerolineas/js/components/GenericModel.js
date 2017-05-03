/**
 * Created by nico on 26/04/17.
 */
let GenericModel = function () {
};

GenericModel.prototype = {

    /**
     * Setter method
     */
    get: function(attribute) {
        return this.attributes[attribute];
    },

    /**
     * Getter method
     */
    set: function(attribute, value) {
        this.attributes[attribute] = value || '';
    },

    /**
     * To String method
     * @returns {string}
     */
    toString: function () {
        let result = '';
        for(let attributes in this.attributes){
            result += this.attributes[attributes];
        }
        return result;
    }

};