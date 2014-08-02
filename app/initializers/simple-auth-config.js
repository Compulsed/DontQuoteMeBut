import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';


var FacebookAuthenticator = Base.extend({
restore: function(properties) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    if (!Ember.isEmpty(properties.accessToken)) {
      resolve(properties);
    } else {
      reject();
    }
  });
},
authenticate: function() {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    window.FB.getLoginStatus(function(fbResponse) {
      if (fbResponse.status === 'connected') {
        Ember.run(function() {
          resolve({ accessToken: fbResponse.authResponse.accessToken });
        });
      } else if (fbResponse.status === 'not_authorized') {
        reject();
      } else {
        window.FB.login(function(fbResponse) {
          if (fbResponse.authResponse) {
            Ember.run(function() {
              resolve({ accessToken: fbResponse.authResponse.accessToken });
            });
          } else {
            reject();
          }
        });
      }
    });
  });
},
invalidate: function() {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    window.FB.logout(function(response) {
      Ember.run(resolve);
    });
  });
}
});

export default {
  name:       'simple-auth-config',
  before:     'simple-auth',
  initialize: function(container) {
    window.ENV = DontQuoteMeButENV;
    container.register('authenticator:facebook', FacebookAuthenticator);
  }
};