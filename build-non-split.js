const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};
config.optimization.runtimeChunk = false;
config.output.filename = 'static/js/[name].js';
config.plugins[5].options.filename = 'static/css/[name].css';

config.plugins.forEach((el)=>{
  console.log(JSON.stringify(el));
})