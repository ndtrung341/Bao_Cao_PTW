import { Box } from '@mui/material';
import React from 'react';
import { LOGO } from 'constants';
import { makeStyles } from '@material-ui/core';

const HeaderLogo = () => {
   return (
      <>
         <Box
            sx={{
               display: 'flex',
               flexGrow: { md: 0, xs: 1 },
               order: { md: 0, xs: 1 },
               mr: 2,
               width: 90,
            }}
         >
            <img src={LOGO} alt="" />
         </Box>
      </>
   );
};

export default HeaderLogo;
