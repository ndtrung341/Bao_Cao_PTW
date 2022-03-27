import { Container } from '@mui/material';
import React from 'react';
import TitleSection from './TitleSection';

const NewProducts = () => {
   return (
      <>
         <Container>
            <TitleSection title={'Sản phẩm mới'} subTitle={'Các sản phẩm mới có tại cửa hàng'} />
         </Container>
      </>
   );
};

export default NewProducts;
