/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'oauth-tests',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'script-src': '\'self\' \'unsafe-eval\' apis.google.com',
      'frame-src': '\'self\' https://*.firebaseapp.com',
      'connect-src': '\'self\' wss://*.firebaseio.com https://*.googleapis.com'
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'youtube-oauth2-bearer': {
          apiKey: process.env.GOOGLE_APIKEY,
          redirectUri: 'http://localhost:4200'
        },
        'youtube-oauth2-code': {
          apiKey: process.env.GOOGLE_APIKEY,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          redirectUri: 'http://localhost:4200'
        }
      }
    },
    firebase: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
