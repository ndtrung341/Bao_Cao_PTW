import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormLabel, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import FilterLabel from './FiterLabel';

const useStyles = makeStyles((theme) => ({
   item: {
      '&:hover': {
         color: theme.palette.primary.main,
         cursor: 'pointer',
      },
   },
}));

const categoryList = ['Whey', 'Mass', 'Bcaa'];

const FilterByBrand = ({ onChange }) => {
   const classes = useStyles();

   return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <FilterLabel>thương hiệu</FilterLabel>
         <List sx={{ pt: 0, pb: 1 }}>
            {categoryList.map((item, index) => (
               <ListItem key={index} sx={{ py: 0 }} className={classes.item}>
                  <FormLabel sx={{ display: 'flex' }}>
                     <Checkbox size='small' value={item} sx={{ p: 0, mr: 1 }} />
                     <Typography variant='subtitle1'>{item}</Typography>
                  </FormLabel>
               </ListItem>
            ))}
         </List>
      </Box>
   );
};

FilterByBrand.propTypes = {
   onChange: PropTypes.func,
};

export default FilterByBrand;
