export function persistState(key, state) {
  localStorage.setItem(
    key,
    typeof state === 'string' ? state : JSON.stringify(state)
  );
}

export function getLocalStorageByKey(key) {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
}
