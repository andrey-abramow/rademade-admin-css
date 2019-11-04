const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (config, options) => {
  config.module.rules.push(
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: 'sprite.svg'
      }
    }
  )
  config.plugins.push(
    new SpriteLoaderPlugin({
    })
  );
  console.log(config.module.rules)
  return config;
};