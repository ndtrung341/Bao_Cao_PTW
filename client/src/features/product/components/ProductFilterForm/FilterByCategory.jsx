import React from 'react';
import PropTypes from 'prop-types';
import { Box, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import FilterLabel from './FiterLabel';
import { useSelector } from 'react-redux';
import { selectCategoryChildrenList } from 'features/category/categorySlice';
import { selectFilters } from 'features/product/collectionSlice';

const useStyles = makeStyles((theme) => ({
   item: {
      '&&': {
         padding: theme.spacing(0, 2),
         paddingTop: 5,
         paddingBottom: 5,
         '&:hover': {
            color: theme.palette.primary.main,
            cursor: 'pointer',
         },
         '&.active': {
            backgroundColor: theme.palette.primary.light,
            color: '#fff',
         },
      },
   },
}));

const FilterByCategory = ({ onFiltersChange }) => {
   const classes = useStyles();
   const filters = useSelector(selectFilters);
   const categoryList = useSelector(selectCategoryChildrenList);

   const handleCategoryClick = (id) => {
      if (!onFiltersChange) return;
      const newFilters = {
         ...filters,
         category: id,
         page: 1,
      };
      onFiltersChange(newFilters);
   };

   return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <FilterLabel>danh mục</FilterLabel>
         <List sx={{ pt: 0, pb: 1 }}>
            {categoryList.map((item, index) => (
               <ListItem
                  key={index}
                  sx={{ pt: 0 }}
                  className={`${classes.item} ${
                     item.id === filters.category ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryClick(item.id)}
               >
                  <Typography variant='subtitle2' lineHeight={'unset'}>
                     {item.name}
                  </Typography>
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
