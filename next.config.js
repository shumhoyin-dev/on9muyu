// next.config.js
module.exports = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(mp3)$/,
        type: 'asset/resource',
      });
      return config;
    },
  };