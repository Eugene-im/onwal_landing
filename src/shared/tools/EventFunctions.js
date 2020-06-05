export function sendDataToHeader(data) {
  var event = new CustomEvent('event-for-header', {
    detail: data,
  });
  document.dispatchEvent(event);
}
