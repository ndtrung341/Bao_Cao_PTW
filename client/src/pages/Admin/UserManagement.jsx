import { makeStyles } from '@material-ui/core';
import { Backdrop, Box, CircularProgress, Pagination, Typography } from '@mui/material';
import { productApi } from 'api/productApi';
import { userApi } from 'api/userApi';
import UserTable from 'components/Admin/UserTable';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
   title: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
   },
}));

const UserManagement = () => {
   const classes = useStyles();
   const [loading, setLoading] = useState(false);
   const [userList, setUserList] = useState([]);
   const [pagination, setPagination] = useState({});
   const [filters, setFilters] = useState({
      page: 1,
   });

   useEffect(() => {
      let isUnmounted = false;

      (async () => {
         setLoading(true);

         const res = await userApi.getAll(filters);
         if (isUnmounted) return;

         setUserList(res.data);
         setPagination(res.pagination);
         setLoading(false);
      })();

      return () => {
         isUnmounted = true;
      };
   }, [filters]);

   const deleteUser = async (id) => {
      try {
         await userApi.delete(id);
         toast.success('Xóa người dùng thành công');
         setFilters({ ...filters });
      } catch (error) {
         console.log(error);
         toast.error('Xóa người dùng thất bại');
      }
   };

   const updateRole = async (userId, newRole) => {
      try {
         await userApi.updateRole(userId, newRole);
         toast.success('Cập nhật người dùng thành công');
         setFilters({ ...filters });
      } catch (error) {
         console.log(error);
         toast.error('Cập nhật người dùng thất bại');
      }
   };

   return (
      <>
         <Box className={classes.title}>
            <Typography variant='h5'>Người dùng</Typography>
         </Box>

         <UserTable userList={userList} onDeleteUser={deleteUser} onUpdateRole={updateRole} />

         <Box my={2} display='flex' justifyContent='center'>
            <Pagination
               page={filters.page}
               count={Math.ceil(pagination._total / pagination._limit) || 0}
               color='primary'
               onChange={(e, page) => setFilters({ ...filters, page })}
            />
         </Box>

         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color='inherit' size={50} />
         </Backdrop>
      </>
   );
};

export default UserManagement;
