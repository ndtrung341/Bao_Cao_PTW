import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { fetchCollection, selectFilters } from 'redux/collectionSlice';

const useCollectionQuery = (pathname) => {
   const filters = useSelector(selectFilters);
   const navigate = useNavigate();
   const [searchParams, setSearchParams] = useSearchParams();
   const dispatch = useDispatch();

   // handle filters change
   const handleFiltersChange = (filters) => {
      filters.page === 1 && delete filters.page;
      setSearchParams(queryString.stringify(filters));
   };

   // update filters state, scroll top
   useEffect(() => {
      const params = Object.fromEntries(new URLSearchParams(searchParams));

      const filters = {
         ...params,
         page: searchParams.get('page') || 1,
         category: +searchParams.get('category') || undefined,
         maxPrice: +searchParams.get('maxPrice') || undefined,
         minPrice: +searchParams.get('minPrice') || undefined,
      };

      window.scrollTo(0, 0);

      dispatch(fetchCollection({ filters, pathname }))
         .unwrap()
         .catch((err) => {
            console.log(err);
            // navigate('/404', { replace: true });
         });
   }, [searchParams, pathname, navigate, dispatch]);

   return { filters, handleFiltersChange };
};

export default useCollectionQuery;
