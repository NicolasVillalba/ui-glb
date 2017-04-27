let VideoCards = function(attributes){
    GenericModel.call(this, attributes);
    this.attrs = attributes.model;
    this.$el = document.querySelector(attributes.el);
};

/**
 *
 * @type {GenericModel}
 */
VideoCards.prototype = GenericModel.prototype;

VideoCards.prototype.render = function() {
        var container = document.createElement('div');
        container.innerHTML = this.template();
        this.$el.appendChild(container);
};

VideoCards.prototype.template = function(){
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
            }, '');
            return '<div>' + n + '</div>';
};



