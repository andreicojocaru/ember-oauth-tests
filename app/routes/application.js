import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      let session = this.get('session');

      if(session.get('isAuthenticated')) {
        this.transitionTo('index');
        return;
      }

      let settings = {
        provider: 'google'
      };

      this.get('session').open('firebase', settings).then((auth) => {
        console.log('Authorization returned', auth);
        this.transitionTo('index');
      });
    }
  }
});
