import React from 'react';
import { Box } from '@mui/material';
import { LOGO } from 'constants';

const HeaderLogo = () => {
   return (
      <>
         <Box
            sx={{
               display: 'flex',
               flexGrow: { md: 0, xs: 1 },
               order: { md: 0, xs: 1 },
               mr: 2,
               height: '100%',
            }}
         >
            <img src={LOGO} alt='' width={200} height={70} style={{ objectFit: 'cover' }} />
         </Box>
      </>
   );
};

export default HeaderLogo;
