export function Request() {
  return {
    post: async (url, object) => {
      return await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(object),
      });
    },
    get: async url => {
      const response = await fetch(url);
      return await response.json();
    },
  };
}
