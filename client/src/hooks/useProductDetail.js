import { useEffect, useState } from 'react';
import { productApi } from 'api/productApi';
import { useNavigate } from 'react-router-dom';

const useProductDetail = (id) => {
   const [loading, setLoading] = useState(true);
   const [product, setProduct] = useState(null);
   const [relatedList, setRelatedList] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      if (!id) return navigate('/404', { replace: true });
      (async () => {
         try {
            const [product, { data: relatedList }] = await Promise.all([
               productApi.get(id),
               productApi.getRelated(id),
            ]);
            setProduct(product);
            setRelatedList(relatedList);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      })();
   }, [id, navigate]);

   return { loading, product, relatedList };
};
export default useProductDetail;
