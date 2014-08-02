import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DontQuoteMeButENV.locationType
});

Router.map(function() {

  this.resource('index', {path: '/'}, function(){
    this.resource('post', {path: '/post/:post_id'}, function(){

    });
  });

  this.route('login');
  this.route('feedback');
  this.route('account'); // Protected
});

export default Router;
