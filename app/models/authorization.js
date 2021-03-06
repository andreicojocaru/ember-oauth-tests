import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  accessToken: attr('string'),
  authorizationCode: attr('string'),
  refreshToken: attr('string')
});
