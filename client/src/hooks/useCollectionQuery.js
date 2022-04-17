import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { collectionActions, fetchCollection, selectFilters } from 'redux/collectionSlice';

const useCollectionQuery = () => {
   const filters = useSelector(selectFilters);
   const [searchParams, setSearchParams] = useSearchParams();

   const dispatch = useDispatch();

   // handle filters change
   const handleFiltersChange = (filters) => {
      filters.page === 1 && delete filters.page;
      setSearchParams(queryString.stringify(filters));
   };

   // update filters state,scroll top and fetching when search change
   useEffect(() => {
      console.log('fetching');
      const params = Object.fromEntries(new URLSearchParams(searchParams));

      const newFilters = {
         ...params,
         page: searchParams.get('page') || 1,
         category: +searchParams.get('category') || undefined,
         maxPrice: +searchParams.get('maxPrice') || undefined,
         minPrice: +searchParams.get('minPrice') || undefined,
      };

      window.scrollTo(0, 0);
      dispatch(collectionActions.setFilters(newFilters));
      dispatch(fetchCollection(newFilters));
   }, [searchParams, dispatch]);

   return { filters, handleFiltersChange };
};

export default useCollectionQuery;
