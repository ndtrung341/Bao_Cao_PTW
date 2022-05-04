import { getPathPublic } from 'utils';
const slide1 = getPathPublic('slide1.png');
const slide2 = getPathPublic('slide2.png');
const slide3 = getPathPublic('slide3.png');
const slide4 =
   'https://www.lego.com/cdn/cs/set/assets/blt74e9f9c0ce69e546/MT4-TEASER-Landing-75341-202204-Hero-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=2200&height=700&dpr=1';

const slide5 =
   'https://www.lego.com/cdn/cs/set/assets/bltb139edf6845b9823/21332-Hero-Standard-Large-8.jpg?fit=crop&format=webply&quality=80&width=2200&height=700&dpr=1';
const bannerApi = {
   getAll() {
      return { data: [slide4, slide5] };
   },
};
export default bannerApi;
