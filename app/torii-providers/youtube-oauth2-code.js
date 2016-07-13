/**
 * This class implements authentication against YouTube
 * using the OAuth2 authorization flow in a popup window.
 */

import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

var YouTubeOauth2Code = Oauth2.extend({

  name:    'youtube-oauth2-code',
  baseUrl: 'https://accounts.google.com/o/oauth2/auth',

  // additional params that this provider requires
  optionalUrlParams: ['scope', 'request_visible_actions', 'approval_prompt'],

  requestVisibleActions: configurable('requestVisibleActions', ''),

  responseParams: ['code', 'state'],

  scope: configurable('scope', 'https://www.googleapis.com/auth/youtube.readonly'),

  approvalPrompt: configurable('approvalPrompt', 'auto'),

  redirectUri: configurable('redirectUri', 'http://localhost:4200/oauth2callback')
});

export default YouTubeOauth2Code;
