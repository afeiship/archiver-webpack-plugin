var objectAssign = require('object-assign');
var process = require('./lib/process');
var RETURN_VALUE = function (inValue) { return inValue };
var DEFAULT_FORMAT = 'tar';
var DEFAULT_OUTPUT = './dist';

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function ArchiverWebpackPlugin(inOptions) {
  var options = objectAssign({
    format: DEFAULT_FORMAT,
    output: DEFAULT_OUTPUT,
    transform: RETURN_VALUE,
    formatOptions: {}
  }, inOptions);

  this.options = options;
}


/**
 * Implement the plugin
 */
ArchiverWebpackPlugin.prototype.apply = function (compiler) {
  var self = this;
  compiler.plugin('emit', function (compilation) {
    return process(self.options);
  });
};

module.exports = ArchiverWebpackPlugin;
