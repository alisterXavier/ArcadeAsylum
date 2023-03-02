let debounce;
export const debounceFn = (fn) => {
  if (debounce) clearTimeout(debounce);
  debounce = setTimeout(fn, 1000);
};