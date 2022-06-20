import { MenuItem } from '@material-ui/core';
import {
   Box,
   Button,
   Menu,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import useModal from 'hooks/useModal';
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from 'utils';

const roles = ['user', 'admin'];

const UserTable = ({ userList, onDeleteUser, onUpdateRole }) => {
   const { modal } = useModal();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [selectUser, setSelectUser] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (event, user) => {
      setAnchorEl(event.currentTarget);
      setSelectUser(user);
   };

   const handleClose = () => {
      setAnchorEl(null);
      setSelectUser(null);
   };

   const handleRoleChange = (newRole) => {
      if (!selectUser) return;
      const user = selectUser;
      if (!newRole.match(new RegExp(user.role, 'i'))) {
         onUpdateRole(user.id, newRole);
      }
      setAnchorEl(null);
   };

   const handleRemoveClick = (user) => {
      modal({
         type: 'warning',
         content: 'Bạn có muốn xóa tài khoản này mà không thể khôi phục lại?',
         title: `Xóa người dùng '${user.email}'`,
         onSubmit: () => onDeleteUser(user.id),
      });
   };

   return (
      <TableContainer component={Paper}>
         <Table size='small' aria-label='simple table'>
            <TableHead>
               <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Họ tên</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align='center'>Quyền</TableCell>
                  <TableCell align='right'>Thao tác</TableCell>
               </TableRow>
            </TableHead>

            <TableBody>
               {userList.map((user) => (
                  <TableRow key={user.id} onClick={() => console.log(user)}>
                     <TableCell>{user.id}</TableCell>
                     <TableCell>{user.fullname}</TableCell>
                     <TableCell>{user.email}</TableCell>
                     <TableCell align='center'>
                        <Button
                           onClick={(e) => handleClick(e, user)}
                           sx={{ cursor: 'pointer' }}
                           color={`${user.role === 'admin' ? 'error' : 'inherit'}`}
                        >
                           {capitalize(user.role)}
                        </Button>
                        <Menu
                           id='basic-menu'
                           anchorEl={anchorEl}
                           open={open}
                           onClose={handleClose}
                           MenuListProps={{
                              'aria-labelledby': 'basic-button',
                           }}
                        >
                           {roles.map((item) => {
                              return (
                                 <MenuItem key={item} onClick={() => handleRoleChange(item)}>
                                    {capitalize(item)}
                                 </MenuItem>
                              );
                           })}
                        </Menu>
                     </TableCell>
                     <TableCell align='right'>
                        <Button
                           size='small'
                           color='error'
                           variant='contained'
                           sx={{ ml: 1 }}
                           onClick={() => handleRemoveClick(user)}
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

export default UserTable;
