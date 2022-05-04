import bannerApi from 'api/bannerApi';
import { productApi } from 'api/productApi';
import { useEffect, useState } from 'react';

const useHome = () => {
   const [latestList, setLatestList] = useState([]);
   const [topList, setTopList] = useState([]);
   const [bannerList, setBannerList] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         setLoading(true);

         const responseList = await Promise.all([
            productApi.getLatest(),
            productApi.getBestSeller(),
            bannerApi.getAll(),
         ]);

         const [latestList, topList, bannerList] = responseList.map(({ data }) => data);

         setLoading(false);
         setLatestList(latestList);
         setTopList(topList);
         setBannerList(bannerList);
      })();
   }, []);

   return { latestList, topList, bannerList, loading };
};

export default useHome;
