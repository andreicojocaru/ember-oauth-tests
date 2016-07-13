import Ember from 'ember';

export default Ember.Route.extend({
  _setUserToken(key, value) {
    let user = this.get('session.currentUser');

    return user.get('auth').then((userAuth) => {
      if (!userAuth) {
        userAuth = this.get('store').createRecord('authorization', {
          user
        });
      }

      userAuth.set(key, value);

      return userAuth.save().then(function () {
        return user.save();
      });
    });
  },
  actions: {
    authYTbearer() {
      this.get('torii').open('youtube-oauth2-bearer').then((auth) => {
        console.log('YT [bearer] auth returned', auth);

        return this._setUserToken('authorizationCode', auth.authorizationToken.token);

      });
    },
    authYTcode() {
      this.get('torii').open('youtube-oauth2-code').then((auth) => {
        console.log('YT [code] auth returned', auth);

        return this._setUserToken('accessToken', auth.authorizationCode);
      });
    }
  }
});
