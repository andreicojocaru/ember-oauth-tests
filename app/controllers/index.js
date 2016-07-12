import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  token: Ember.computed.alias('model.authorizationToken.token'),
  isAuthorized: Ember.computed('token', function isAuthorized() {
    return !!this.get('token');
  }),
  ytBaseUrl: 'https://www.googleapis.com/youtube/v3/',
  actions: {
    makeYTCall() {
      let base = this.get('ytBaseUrl') + 'channels';
      let query = '?mine=true&part=snippet,contentDetails';
      var token = '&access_token=' + this.get('token');

      let url = base + query + token;

      this.get('ajax').request(url).then((response) => {
        console.log('YT channel response', response);
      });
    }
  }
});
