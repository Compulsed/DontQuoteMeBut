import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DontQuoteMeButENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('stream');
});

export default Router;
