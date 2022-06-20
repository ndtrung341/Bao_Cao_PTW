import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: { display: 'flex', height: (props) => (props.size === 'small' ? 30 : 35) },
   button: {
      '&&': {
         minWidth: (props) => (props.size === 'small' ? 25 : 35),
         fontSize: 20,
         border: `1px solid ${theme.palette.grey[400]}`,
         color: theme.palette.text.secondary,
      },
      '&.increase': {
         borderLeft: 0,
         borderRadius: '0 4px 4px 0',
      },
      '&.decrease': {
         borderRight: 0,
         borderRadius: '4px 0 0 4px',
      },
   },
   input: {
      '& input': {
         textAlign: 'center',
         paddingLeft: 5,
         paddingRight: 5,
      },
      '& .MuiOutlinedInput-root': {
         height: '100%',
         width: (props) => (props.size === 'small' ? 50 : 60),
         borderRadius: 0,
      },
   },
}));

const QuantityField = ({ value, size, onChange, onBlur, max, min }) => {
   const classes = useStyles({ size });
   const [inputValue, setInputValue] = useState(1);

   useEffect(() => {
      setInputValue(value);
   }, [value]);

   const handleBlur = (value) => {
      onBlur?.(value);
   };

   const handleChange = (value) => {
      const newValue = value > max ? max : value;
      setInputValue(newValue);
      onChange?.(newValue);
   };

   return (
      <Box className={classes.root}>
         <Button
            className={`${classes.button} decrease`}
            disabled={!!min && inputValue === min}
            onClick={() => handleChange(value - 1)}
         >
            <RemoveIcon fontSize='inherit' />
         </Button>

         <TextField
            className={classes.input}
            type='number'
            color='primary'
            value={inputValue}
            size='small'
            onChange={(e) => handleChange(+e.target.value || 1)}
            onBlur={() => handleBlur(inputValue)}
         />

         <Button
            className={`${classes.button} increase`}
            disabled={inputValue === max}
            onClick={() => handleChange(value + 1)}
         >
            <AddIcon fontSize='inherit' />
         </Button>
      </Box>
   );
};

QuantityField.defaultProps = {
   size: 'medium',
};

QuantityField.propTypes = {
   size: PropTypes.oneOf(['small', 'medium']),
};

export default QuantityField;
