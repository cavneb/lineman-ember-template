/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/testdouble/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    //
    //js: {
      //vendor: [
        //"vendor/js/jquery/jquery.min.js",
        //"vendor/js/handlebars/handlebars.runtime.js",
        //"vendor/js/ember/ember.js",
        //"vendor/js/ic-ajax/main.js"
      //]
    //}

  };
};
