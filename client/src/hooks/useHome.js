import bannerApi from 'api/bannerApi';
import { productApi } from 'api/productApi';
import { useEffect, useState } from 'react';

const useHome = () => {
   const [latestList, setLatestList] = useState([]);
   const [topList, setTopList] = useState([]);
   const [bannerList, setBannerList] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      let isUnsubcribe = true;
      (async () => {
         setLoading(true);

         const responseList = await Promise.all([
            productApi.getLatest(),
            productApi.getBestSeller(),
            bannerApi.getAll(),
         ]);

         const [latestList, topList, bannerList] = responseList.map(({ data }) => data);
         // console.log({ latestList, topList, bannerList });

         setLoading(false);
         setLatestList(latestList);
         setTopList(topList);
         setBannerList(bannerList);
      })();

      return () => (isUnsubcribe = false);
   }, []);

   return { latestList, topList, bannerList, loading };
};

export default useHome;
