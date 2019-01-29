const config = {
  env: 'development',
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3001,
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig = {};

try {
  envConfig = require(`./env.${config.env}`) || {};
} catch (e) {
  envConfig = {};
}

export default {
  ...config,
  ...envConfig,
};
