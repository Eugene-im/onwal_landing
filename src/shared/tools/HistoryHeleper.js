export function isGoFromPreviousSlide() {
  if (!window.historyPages) {
    window.historyPages = [];
  }
  const arr = [...window.historyPages];
  arr.pop();
  const last = arr.pop();
  console.log('isGoFromPreviousSlide', last);
  if (last) {
    const listSlides = [
      '/one-protocol',
      '/one-player',
      '/one-hardware',
      '/media-agnostic',
      '/multi-cast',
      '/packager',
    ];

    for (let i = 0; i < listSlides.length; i++) {
      if (last.pathname.indexOf(listSlides[i]) > -1) {
        return true;
      }
    }
  }
}
