let VideoCards = function(attributes){
    this.attrs = attributes.model;
    this.$el = document.querySelector(attributes.el);
}

/**
 * Prototype
 */

VideoCards.prototype = {

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
        if(this.attrs.hasOwnProperty(attribute)){
        this.attrs[attribute] = value || '';   
        }
    },

    /**
     * Render method
     */
    render: function() {
        var container = document.createElement('div');
        container.innerHTML = this.template();
        this.$el.appendChild(container.firstChild);
    },

    template: function(){
        let n = this.get('videos')
            .reduce((ant, card) => {
               return '<div' + 
                    '<img src="' + card.capture + '"/>'
                    + '<span>' + card.duration + '</span>'
                    + '<h3>' + card.title + '</h3>'
                    + '' + card.user.name + ''
                    + '' + card.user.profile + ''
                    + card.visualizations 
                    + card.uploaded 
                    + '</div>' + ant
            }, '---------------------------');
            return '<div>' + n + '</div>';
    }

}



