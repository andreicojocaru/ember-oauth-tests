/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  console.log('Make sure the .ENV file containing the app secrets exists in your project root!');

  var app = new EmberApp(defaults, {
     dotEnv: {
      clientAllowedKeys: [
        'FIREBASE_KEY',
        'FIREBASE_AUTHDOMAIN',
        'FIREBASE_DATABASEURL',
        'FIREBASE_STORAGEBUCKET',
        'GOOGLE_APIKEY',
        'GOOGLE_CLIENT_SECRET'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
