import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import FilterLabel from './FilterLabel';

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
      },
   },
}));

const FilterByCategory = ({ onCategoryChange, categoryList = [], values = [] }) => {
   const classes = useStyles();

   const handleChange = (e) => {
      const { checked, value } = e.target;
      const newValues = checked ? [...values, value] : values.filter((item) => item !== `${value}`);

      onCategoryChange(newValues);
   };

   return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <FilterLabel>danh mục</FilterLabel>
         <List sx={{ pt: 0, pb: 1 }}>
            {categoryList.map((item) => (
               <ListItem key={item.id} sx={{ pt: 0 }} className={classes.item}>
                  <FormControlLabel
                     control={
                        <Checkbox
                           size='small'
                           sx={{ py: 0 }}
                           value={item.id}
                           checked={values.includes(`${item.id}`)}
                           onChange={handleChange}
                        />
                     }
                     label={<Typography>{item.name}</Typography>}
                  />
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
