import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  token: Ember.computed.alias('session.currentUser.auth.authorizationCode'),
  channels: Ember.computed.alias('session.currentUser.ytChannels'),
  isAuthorized: Ember.computed('token', function isAuthorized() {
    return !!this.get('token');
  }),
  ytBaseUrl: 'https://www.googleapis.com/youtube/v3/',
  _upadateUserChannelData(channelResponse) {
    let user = this.get('session.currentUser');

    user.get('ytChannels').then((userChannels) => {

      channelResponse.items.forEach((channel) => {
        var etag = channel.etag;
        var existing = userChannels.filterBy('etag', etag);

        if (existing && existing.length > 0) {
          //todo: update persisted channel details
        } else {

          var storeChannel = this.get('store').createRecord('yt-channel', {
            user,
            etag,
            uid: channel.id,
            title: channel.snippet.title,
            description: channel.snippet.description,
            publishedAt: channel.snippet.publishedAt,
            thumbnail: channel.snippet.thumbnails.default.url,
            favorites: channel.contentDetails.relatedPlaylists.favorites,
            likes: channel.contentDetails.relatedPlaylists.likes,
            uploads: channel.contentDetails.relatedPlaylists.uploads,
            watchHistory: channel.contentDetails.relatedPlaylists.watchHistory,
            watchLater: channel.contentDetails.relatedPlaylists.watchLater
          });

          return storeChannel.save();
        }
      });

      return user.save();
    });
  },
  actions: {
    makeYTCall() {
      let base = this.get('ytBaseUrl') + 'channels';
      let query = '?mine=true&part=snippet,contentDetails';
      var token = '&access_token=' + this.get('token');

      let url = base + query + token;

      this.get('ajax').request(url).then((response) => {
        console.log('YT channel response', response);
        this._upadateUserChannelData(response);
      });
    }
  }
});
