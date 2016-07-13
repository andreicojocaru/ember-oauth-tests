import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  token: attr('string'),
  favorites: attr('string'),
  likes: attr('string'),
  uploads: attr('string'),
  watchHistory: attr('string'),
  watchLater: attr('string')
});
