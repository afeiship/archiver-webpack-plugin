# archiver-webpack-plugin
> Archiver webpack plugin.

## installation
```shell
npm install -D @jswork/archiver-webpack-plugin
```

## usage
```js
import ArchiverWebpackPlugin from '@jswork/archiver-webpack-plugin';

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

## options
| Name          | Type     | Default                            | Description                          |
| :------------ | :------- | :--------------------------------- | :----------------------------------- |
| format        | String   | tar                                | archiver format options              |
| formatOptions | Object   | { gzip: true, zlib: { level: 9 } } | archiver options                     |
| transform     | Function | -                                  | `replace` to transform package path. |
| output        | Function | -                                  | `replace` to output package path.    |
| ext           | String   | .tar.gz                            | Package extention                    |


## resources
- https://github.com/Seldszar/archiver-webpack-plugin
- https://archiverjs.com/docs/#quick-start
