import { useEffect, useState } from 'react';
import { productApi } from 'api/productApi';
import { useNavigate } from 'react-router-dom';

const useProductDetail = (slug) => {
   const [loading, setLoading] = useState(true);
   const [product, setProduct] = useState({});
   const [relatedList, setRelatedList] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      let isUnmounted = false;

      (async () => {
         try {
            if (isUnmounted) return;
            const product = await productApi.get(slug);
            const { data: relatedList } = await productApi.getRelated(product.id);
            // const [product, { data: relatedList }] = await Promise.all([
            //    productApi.get(slug),
            //    productApi.getRelated(slug),
            // ]);
            setProduct(product);
            setRelatedList(relatedList);
         } catch (error) {
            return navigate('/404', { replace: true });
         } finally {
            setLoading(false);
         }
      })();

      return () => {
         isUnmounted = true;
      };
   }, [slug, navigate]);

   return { loading, product, relatedList };
};
export default useProductDetail;
