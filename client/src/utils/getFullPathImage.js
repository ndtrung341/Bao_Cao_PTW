export const getFullPathImage = (url) => {
   return process.env.REACT_APP_IMAGE_BASE_URL + url;
};

export const getPathPublic = (imageName) => {
   return `${process.env.PUBLIC_URL}/images/${imageName}`;
};
