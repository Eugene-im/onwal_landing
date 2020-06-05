var glob = require('glob');
var fs = require('fs');
const svgs = glob.sync('**/*.svg', {});
const pngs = glob.sync('**/*.png', {});
const jpgs = glob.sync('**/*.jpg', {});
const files = [...svgs, ...pngs, ...jpgs];
fs.writeFile('imgs_cathe.json', JSON.stringify(files), 'utf8', function(err) {
  if (err) return console.log(err);
});