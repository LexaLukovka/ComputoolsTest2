const path = require('path')

module.exports = {
  resolve: {
    alias: {
      assets: path.resolve('./src/assets'),
      components: path.resolve(__dirname, './src/components/'),
      state: path.resolve(__dirname, './src/state/'),
      src: path.resolve(__dirname, './src/'),
    },
  },

}
