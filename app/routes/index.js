import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return this.store.find('quote');
    },

    setupController: function(controller, model){
        // Preserves model hook
        this._super(controller, model);
    }
});