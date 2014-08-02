import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      authenticateWithFacebook: function() {
        console.log("authenticateWithFacebook INSIDE OF");

        this.get('session').authenticate('authenticator:facebook', {});
      }
    }
});
