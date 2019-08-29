export function setItem(key, item) {
  window.localStorage.setItem(key, typeof item === 'object' ? JSON.stringify(item) : item);
};

export function getItem(key) {
  return JSON.parse(window.localStorage.getItem(key));
};