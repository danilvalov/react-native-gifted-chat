/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
*
* @type {import('metro-config').MetroConfig}
*/

/* eslint-disable @typescript-eslint/no-require-imports */
const { mergeConfig } = require('@react-native/metro-config')
const { getDefaultConfig } = require('@expo/metro-config')
const path = require('path')
// const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config')

/* eslint-enable @typescript-eslint/no-require-imports */
const config = {
  watchFolders: [
    path.resolve(__dirname, '../src'),
  ],
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          // console.log(`example/metro name: ${name}`, Object.prototype.hasOwnProperty.call(target, name))
          if (Object.prototype.hasOwnProperty.call(target, name))
            return target[name]

          if (name === 'react-native-gifted-chat')
            return path.join(process.cwd(), '../src')

          return path.join(process.cwd(), `node_modules/${name}`)
        },
      }
    ),
  },
}

// module.exports = wrapWithReanimatedMetroConfig(mergeConfig(getDefaultConfig(__dirname), config))
module.exports = mergeConfig(getDefaultConfig(__dirname), config)
