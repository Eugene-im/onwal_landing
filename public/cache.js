(async function preloadImages() {
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var response  = await fetch('imgs_cathe.json');
  var array  = await response.json();
  console.log('array', array);
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();

    img.onload = function(e) {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    }

    list.push(img);
    img.src = array[i];
  }
})();