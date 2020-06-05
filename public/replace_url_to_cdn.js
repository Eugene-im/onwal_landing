var glob = require("glob");
var fs = require("fs");

glob("**/*.css", {}, function (er, files) {
  console.log(files);
  files.forEach((el)=>{
    fs.readFile(el, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/background-image:url\(\//g, 'background-image:url(https://assets.nettr.com/');
      fs.writeFile(el, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  });
});

glob("**/*.html", {}, function (er, files) {
  console.log(files);
  files.forEach((el)=>{
    fs.readFile(el, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/href="\//g, 'href="https://assets.nettr.com/');
      result = result.replace(/src="\//g, 'href="https://assets.nettr.com/');

      fs.writeFile(el, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  });
});
