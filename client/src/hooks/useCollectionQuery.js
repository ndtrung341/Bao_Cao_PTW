import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { fetchCollection } from 'redux/collectionSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const useCollectionQuery = (urlKey) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [searchParams, setSearchParams] = useSearchParams();

   const filters = useMemo(() => {
      const params = Object.fromEntries(new URLSearchParams(searchParams));

      return JSON.parse(
         JSON.stringify({
            ...params,
            page: searchParams.get('page') || 1,
            categories: searchParams.get('categories') || undefined,
            brands: searchParams.get('brands') || undefined,
            maxPrice: +searchParams.get('maxPrice') || undefined,
            minPrice: +searchParams.get('minPrice') || undefined,
         })
      );
   }, [searchParams]);

   // fetch product
   useEffect(() => {
      (async () => {
         try {
            console.log(filters);

            const resultFetch = await dispatch(fetchCollection({ filters, urlKey }));
            unwrapResult(resultFetch);

            window.scrollTo(0, 0);
         } catch (error) {
            console.error(error);
            navigate('/404', { replace: true });
         }
      })();
   }, [filters, urlKey, navigate, dispatch]);

   // sync filters url
   const syncFiltersURL = (filters) => {
      filters.page === 1 && delete filters.page;
      setSearchParams(queryString.stringify(filters));
   };

   return { filters, syncFiltersURL };
};

export default useCollectionQuery;
