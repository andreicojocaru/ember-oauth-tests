import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authYT() {
      var settings = {
        provider: 'youtube-data'
      };

      this.get('torii').open('youtube-oauth2').then((auth) => {
        console.log('YT auth returned', auth);
      });

      // this.get('torii').open('firebase', settings).then((auth) => {
      //   console.log('YT auth returned', auth);
      // });
    }
  }
});
