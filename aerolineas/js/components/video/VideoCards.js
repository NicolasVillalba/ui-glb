let VideoCards = function(attributes){
    this.model = attributes.model;
    this.$el = document.querySelector(attributes.el);
};

/**
 * Render is responsible for insert the template in the page
 */
VideoCards.prototype.render = function() {
        var container = document.createElement('div');
        container.setAttribute('id', 'video-cards');
        container.innerHTML = this.template();
        this.$el.appendChild(container);
};

/**
 * creates a view based on the data tha the object has
 * @returns {string}
 */
VideoCards.prototype.template = function(){
        let template = this.model.get('videos')
        .reduce((ant, card) => {
               return `<div style="float:left; width: 25%; font-size: .8em">
                    <img src=" ${card.capture}" alt="videos-alt"/>
                    <span>${card.duration}</span>
                    <h3>${card.title}</h3>
                     <a href="${card.user.profile}">${card.user.name}</a>
                     ${card.visualizations}
                     ${card.uploaded}
                    </div> ${ant}`
            }, '');
            return template ;
};