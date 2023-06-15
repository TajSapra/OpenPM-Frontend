import Cookies from 'js-cookie';

// Get the value of a cookie by name
export const getCookie = (name) => {
  return Cookies.get(name);
};

// Set a cookie with a name, value, and optional options
export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, options);
};
