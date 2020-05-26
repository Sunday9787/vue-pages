const path = require('path');
const fs = require('fs');
const glob = require('glob');

/**
 *
 * @param {string} dir
 * @returns {string}
 */
const resolve = dir => path.resolve(__dirname, dir);
const dirs = glob.sync('src/pages/**/main.ts');

const pages = {};

dirs.forEach(dir => {
  const filename = dir.match(/\d+.*(?=\/main.ts)/)[0];
  const meta = fs.readFileSync(resolve(`src/pages/${filename}/meta.json`), { encoding: 'utf-8' });
  console.log(meta);
  pages[`${filename}`] = {
    entry: dir,
    template: resolve('public/index.html'),
    filename: `${filename}/index.html`,
    title: dir,
    // chunks: ['chunk-vendors', 'chunk-common', 'main'],
  };
});

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  devServer: {
    port: 8003,
  },
  pages,
  pluginOptions: {
    // 'style-resources-loader': {
    //   preProcessor: 'scss',
    //   patterns: [resolve('src/styles/_variables.scss'), resolve('src/styles/_mixins.scss')],
    // },
  },
  // chainWebpack(config) {
  //   config.resolve.alias
  //     .set('views', resolve('src/views'))
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  //     .set('tools', resolve('src/tools'))
  //     .set('api', resolve('src/api'))
  //     .set('styles', resolve('src/styles'));
  // },
};
