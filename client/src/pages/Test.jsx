import useCollectionQuery from 'hooks/useCollectionQuery';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCollectionLoading } from 'redux/collectionSlice';

const Test = () => {
   const location = useLocation();
   const { filters, handleFiltersChange } = useCollectionQuery(location.pathname);

   return <div>Test</div>;
};

export default Test;
