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
  new ArchiverWebpackPlugin()
]
```

## options:
| Name     | Type     | Default                                  | Description            |
| -------- | -------- | ---------------------------------------- | ---------------------- |
| files    | Array    | ['./package.json']                       | Default files array.   |
| enabled  | Boolean  | true                                     | If enable this plugin. |
| callback | Function | semver.inc(inValue, 'prepatch','alpha'); | See `semver`           |

