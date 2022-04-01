import React from 'react';

import { Container } from '@mui/material';
import Breadcrumb from 'components/Breadcrumb';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DetailPage = () => {
   const { slug } = useParams();
   console.log(slug);
   return (
      <Container>
         <Helmet>
            <title>Ehehe</title>
         </Helmet>
         <Breadcrumb />
      </Container>
   );
};

export default DetailPage;
