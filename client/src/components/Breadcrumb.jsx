import { makeStyles } from '@material-ui/core';
import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from 'utils';
const useStyles = makeStyles((theme) => ({
   item: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      '&.active': {
         color: theme.palette.primary.main,
      },
   },
}));

const Breadcrumb = ({ title, parent }) => {
   const classes = useStyles();
   return (
      <Container>
         <Stack spacing={2} py={3}>
            <Breadcrumbs separator={<NavigateNext fontSize='small' />} aria-label='breadcrumb'>
               <Link to='/' className={classes.item}>
                  Trang chủ
               </Link>
               {parent ? (
                  <Typography className={classes.item}>{capitalize(parent)}</Typography>
               ) : (
                  ''
               )}
               <Typography className={`${classes.item} active`}>{capitalize(title)}</Typography>
            </Breadcrumbs>
         </Stack>
      </Container>
   );
};

export default Breadcrumb;
