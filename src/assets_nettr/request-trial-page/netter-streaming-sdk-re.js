var fs = require('fs');

function getFiles(path) {
  return fs.readdirSync(path).filter(function(file) {
    return !fs.statSync(path + '/' + file).isDirectory();
  });
}

var arr = getFiles('./');
arr.forEach(elm => {
  fs.rename(elm, 'netter-streaming-sdk-' + elm, function(err) {
    if (err) console.log('ERROR: ' + err);
  });
});
