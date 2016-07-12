import Ember from 'ember';

export default Ember.Object.extend({
  open: function (authentication) {
    console.log('APP_Adapter OPEN called!');

    return new Ember.RSVP.Promise((resolve) => {
      resolve({
        currentUser: {
          id: authentication.uid,
          name: authentication.displayName,
          email: authentication.email,
          avatar: authentication.photoURL
        }
      });
    });
  }
});
