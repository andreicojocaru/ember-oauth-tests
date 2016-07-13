import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  uid: attr('string'),
  name: attr('string'),
  avatar: attr('string'),
  auth: belongsTo('authorization'),
  ytModel: belongsTo('yt-model'),
  ytChannels: hasMany('yt-channel')
});
