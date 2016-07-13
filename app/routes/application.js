import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().then(() => {
      console.info('Current user', this.get('session.currentUser'));
    }).catch(() => {
      console.info('Session fetch is empty!');
    });
  },
  actions: {
    signIn() {
      let session = this.get('session');

      if(session.get('isAuthenticated')) {
        this.transitionTo('index');
        return;
      }

      let settings = {
        provider: 'google'
      };

      session.open('firebase', settings).then((auth) => {
        console.log('Authorization returned', auth);
        this.transitionTo('index');
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
