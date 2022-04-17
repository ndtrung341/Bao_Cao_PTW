import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div hidden={value !== index} {...other}>
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

const DetailTabs = () => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Paper sx={{ flexGrow: 1, display: 'flex', minHeight: 200 }} elevation={0}>
         <Tabs
            orientation='vertical'
            variant='standard'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            sx={{ borderRight: 1, borderColor: 'divider' }}
         >
            <Tab label='Mô tả sản phẩm' />
            <Tab label='Đánh giá' />
         </Tabs>
         <TabPanel value={value} index={0}>
            Sản phẩm chưa có mô tả
         </TabPanel>
         <TabPanel value={value} index={1}>
            Sản phẩm chưa có đánh giá
         </TabPanel>
      </Paper>
   );
};
export default DetailTabs;
