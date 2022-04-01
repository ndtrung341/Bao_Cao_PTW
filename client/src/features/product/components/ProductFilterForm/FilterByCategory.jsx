import React from 'react';
import PropTypes from 'prop-types';
import { Box, List, ListItem, Typography } from '@mui/material';
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

const FilterByCategory = ({ onChange }) => {
   const classes = useStyles();

   return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <FilterLabel>danh mục sản phẩm</FilterLabel>
         <List sx={{ pt: 0 }}>
            {categoryList.map((item, index) => (
               <ListItem key={index} sx={{ pt: 0 }} className={classes.item}>
                  <Typography variant='subtitle2'>{item}</Typography>
               </ListItem>
            ))}
         </List>
      </Box>
   );
};

FilterByCategory.propTypes = {
   onChange: PropTypes.func,
};

export default FilterByCategory;
