var objectAssign = require('object-assign');
var process = require('./lib/process');
var RETURN_VALUE = function (inValue) { return inValue };
var DEFAULT_OUTPUT = function (inPath, inExt) { return inPath + inExt };
var DEFAULT_FORMAT = 'tar';
var DEFAULT_EXT = '.tar.gz';

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function ArchiverWebpackPlugin(inOptions) {
  var options = objectAssign({
    format: DEFAULT_FORMAT,
    output: DEFAULT_OUTPUT,
    transform: RETURN_VALUE,
    ext: DEFAULT_EXT,
    formatOptions: {
      gzip: true,
      zlib: { level: 9 }
    }
  }, inOptions);

  this.options = options;
}


/**
 * Implement the plugin
 */
ArchiverWebpackPlugin.prototype.apply = function (compiler) {
  var self = this;
  var updateOptions = function (compilation) {
    Object.assign(self.options, {
      output: self.options.output(compiler.options.output.path, self.options.ext),
      assets: compilation.assets
    })
  };

  if (compiler.hooks) {
    // webpack >=4.0
    compiler.hooks.emit.tap('ArchiverWebpackPlugin', function (compilation) {
      updateOptions(compilation);
      return process(self.options);
    });
  } else {
    // webpack < 4.0:
    compiler.plugin('emit', function (compilation) {
      updateOptions(compilation);
      return process(self.options);
    });
  }
};

module.exports = ArchiverWebpackPlugin;
