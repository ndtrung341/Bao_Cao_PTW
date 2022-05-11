import {
   Box,
   Button,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTable = ({ productList }) => {
   return (
      <TableContainer component={Paper}>
         <Table size='small' aria-label='simple table'>
            <TableHead>
               <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align='right'>Thao tác</TableCell>
               </TableRow>
            </TableHead>

            <TableBody>
               {productList.map((product) => (
                  <TableRow key={product.id}>
                     <TableCell>{product.id}</TableCell>
                     <TableCell sx={{ py: 1 }}>
                        <Box display={'flex'}>
                           <img
                              src={product.thumbnail}
                              alt=''
                              style={{
                                 width: 120,
                                 height: 60,
                                 objectFit: 'contain',
                                 marginRight: 16,
                                 padding: 5,
                                 border: '1px solid #ccc',
                              }}
                           />
                           {product.name}
                        </Box>
                     </TableCell>
                     <TableCell align='right'>
                        <Link to={`${product.id}`} style={{ textDecoration: 'none' }}>
                           <Button size='small' color='info' variant='outlined'>
                              Sửa
                           </Button>
                        </Link>

                        <Button
                           size='small'
                           color='error'
                           variant='contained'
                           sx={{ ml: 1 }}
                           // onClick={() => handleRemoveClick(student)}
                        >
                           Xóa
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default ProductTable;
