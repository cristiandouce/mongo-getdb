module.exports = function (getDb) {
  var hapi_plugin = {};

  hapi_plugin.register = function (plugin, options, next) {
    getDb(function (db) {
      plugin.expose('db', db);
      next();
    });
  };

  hapi_plugin.register.attributes = {
    pkg: require('./package')
  };

  return hapi_plugin;
};