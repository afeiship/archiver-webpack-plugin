var fs = require('fs');
var url = require('url');
var archiver = require('archiver');


module.exports = function process(inOptions) {
  var assets = compilation.assets;
  var archive = this.archive || archiver(inOptions.format, inOptions.formatOptions);

  Object.keys(assets).forEach(file => {
    var asset = assets[file];
    var content = asset.source();
    var parsed = url.parse(file);

    archive.append(content, {
      name: inOptions.transform(parsed.pathname),
    });
  });

  archive.pipe(fs.createWriteStream(output));
  archive.finalize();
};
