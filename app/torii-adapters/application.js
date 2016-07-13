import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  store: Ember.inject.service(),
  open(authentication) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('store').query('user', { orderBy: 'uid', equalTo: authentication.uid }).then((response) => {
        var user = response.get('firstObject');

        if (user) {
          resolve({
            currentUser: user
          });
          return;
        }

        var newUser = this.get('store').createRecord('user', {
          uid: authentication.uid,
          name: authentication.displayName,
          avatar: authentication.photoURL
        });

        newUser.save().then(() => {
          resolve({
            currentUser: newUser
          });
        }).catch((error) => {
          reject(error);
        });
      });
    });
  }
});
