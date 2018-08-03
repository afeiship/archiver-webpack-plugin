# archiver-webpack-plugin
> Archiver webpack plugin.


## install:
```shell
npm install -D afeiship/archiver-webpack-plugin
```

## usage:
```js
import ArchiverWebpackPlugin from 'archiver-webpack-plugin';

// plugins:
plugiins:[
  new ArchiverWebapckPlugin({
    transform: function (inValue) {
      return 'app/' + inValue;
    },
    output: function (inPath, inExt) {
      return inPath.replace('dist', 'dist/app') + inExt;
    }
  })
]
```

## options:
| Name          | Type     | Default                            | Description                               |
| ------------- | -------- | ---------------------------------- | ----------------------------------------- |
| format        | String   | tar                                | archiver format options                   |
| formatOptions | Object   | { gzip: true, zlib: { level: 9 } } | archiver options                          |
| transform     | Function | function (inValue) { return inValue }         | You can `replace` to transfomr package path. |
| output     | Function | function (inPath, inExt) { return inPath + inExt }         | You can `replace` to output package path. |
| ext     | String | .tar.gz         | Package extention |

