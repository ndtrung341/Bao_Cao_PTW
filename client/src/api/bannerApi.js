import { getPathPublic } from 'utils';
const slide1 = getPathPublic('slide1.png');
const slide2 = getPathPublic('slide2.png');
const slide3 = getPathPublic('slide3.png');

const bannerApi = {
   getAll() {
      return { data: [slide1, slide2, slide3] };
   },
};
export default bannerApi;
