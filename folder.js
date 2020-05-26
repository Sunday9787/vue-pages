const fs = require('fs');

const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const dirs = glob.sync('src/pages/**/main.ts');

console.log(dirs);

// console.log(dirs.map(dir => dir.match(/(src\/pages\/\d+)([\w\d\/]+])/g)));
