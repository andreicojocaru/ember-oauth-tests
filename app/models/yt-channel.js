import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  uid: attr('string'),
  etag: attr('string'),
  customUrl: attr('string'),
  title: attr('string'),
  description: attr('string'),
  thumbnail: attr('string'),
  publishedAt: attr('string')
});
