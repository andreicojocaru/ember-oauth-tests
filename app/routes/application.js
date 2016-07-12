import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      let session = this.get('session');

      if(session.get('isAuthenticated')) {
        // todo: redirect to the page
        return;
      }

      let settings = {
        provider: 'google'
      };

      return this.get('session').open('firebase', settings).then((auth) => {
        console.log('Authorization returned', auth);
      });
    }
  }
});
