import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    return {
      currentUser: {
        id: authentication.uid,
        name: authentication.displayName,
        email: authentication.email,
        avatar: authentication.photoURL
      }
    };
  }
});
