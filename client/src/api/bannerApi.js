import img1 from 'assets/img/slide1.png';
import img2 from 'assets/img/slide2.png';
import img3 from 'assets/img/slide3.png';
const bannerApi = {
   getAll() {
      return { data: [img1, img2, img3] };
   },
};
export default bannerApi;
