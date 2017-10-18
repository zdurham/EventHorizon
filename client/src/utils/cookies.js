import Cookies from 'universal-cookie';

const cookies = new Cookies();

// name = name/key of cookie to save
// value = actual value we are saving in the cookie
// options = we use these options to override any cookie defaults
export const setCookie = (name, value, options = {}) =>
  cookies.set(name, value, Object.assign({
    path: '/',
    maxAge: 604800,
  }, options));

// name = name of the cookie we want to get. This grabs the cookie information we want
export const getCookie = name => cookies.get(name);

// name = name of the cookie we want to get. This removes the cookie
export const deleteCookie = name => cookies.remove(name);