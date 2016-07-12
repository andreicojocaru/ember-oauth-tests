import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({

  // open: function (authentication) {
  //   console.log('APP_Adapter OPEN called!');

  //   return new Ember.RSVP.Promise((resolve) => {
  //     resolve({
  //       currentUser: {
  //         id: authentication.uid,
  //         name: authentication.displayName,
  //         email: authentication.email,
  //         avatar: authentication.photoURL
  //       }
  //     });
  //   });
  // }
});
