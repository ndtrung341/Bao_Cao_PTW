export const getItemStorage = (key) => {
   return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
};

export const setItemStorage = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
};

export const removeItemStorage = (key) => {
   localStorage.removeItem(key);
};
