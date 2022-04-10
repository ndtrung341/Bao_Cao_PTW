import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: { display: 'flex', height: (props) => (props.size === 'small' ? 30 : 35) },
   button: {
      '&&': {
         minWidth: (props) => (props.size === 'small' ? 30 : 35),
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
      },
      '& .MuiOutlinedInput-root': {
         height: '100%',
         width: (props) => (props.size === 'small' ? 40 : 45),
         borderRadius: 0,
      },
   },
}));

const QuantityField = ({ size }) => {
   const classes = useStyles({ size });

   return (
      <Box className={classes.root}>
         <Button className={`${classes.button} decrease`}>
            <AddIcon fontSize='inherit' />
         </Button>

         <TextField
            className={classes.input}
            type='number'
            color='primary'
            value={1}
            size='small'
         />

         <Button className={`${classes.button} increase`}>
            <RemoveIcon fontSize='inherit' />
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
