import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DontQuoteMeButENV.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'}, function(){
  	this.route('quote');
  });

  this.route('login');
  this.route('feedback');
});

export default Router;
