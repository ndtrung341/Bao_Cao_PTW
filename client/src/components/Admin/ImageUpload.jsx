import { makeStyles } from '@material-ui/core';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DeleteOutlined } from '@mui/icons-material';
import axiosClient from 'api/axiosClient';

const useStyles = makeStyles((theme) => ({
   buttonUpload: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2, 1),
      borderRadius: theme.shape.borderRadius,
      border: '2px dashed #ccc',
   },
   previewImage: {
      padding: 5,
      width: 150,
      height: 150,
      display: 'inline-block',
      borderRadius: theme.shape.borderRadius,
      border: '2px solid #eee',
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1),
      position: 'relative',
      boxSizing: 'border-box',
      '& img': {
         display: 'block',
         width: '100%',
         height: '100%',
         objectFit: 'contain',
      },
      '&::before': {
         content: "''",
         position: 'absolute',
         zIndex: 1,
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         backgroundColor: '#00000080',
         opacity: 0,
         transition: 'all .3s',
      },
      '&:hover::before,&:hover $previewActions': {
         opacity: 1,
      },
   },
   previewActions: {
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      opacity: 0,
      transition: 'all .3s',
      '& .action-delete': {
         color: '#fff',
         background: '#f55',
         '&:hover': { background: '#f55' },
      },
   },
   lazy: {
      position: 'relative',
      width: 150,
      height: 150,
      display: 'inline-block',
      borderRadius: theme.shape.borderRadius,
      border: '2px solid #eee',
      background: '#ccc',
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1),
      boxSizing: 'border-box',
   },
   loading: {
      display: 'inline-block',
      position: 'absolute',
      transform: 'translate(-50%,-50%)',
      top: '50%',
      left: '50%',
   },
}));

const ImageUpload = ({
   maxFiles = 6,
   previewImages,
   action,
   fileList,
   onUpload,
   onRemove,
   onError,
}) => {
   const classes = useStyles();
   const [amountLoading, setAmountLoading] = useState(0);

   const updateFileList = async (files) => {
      const promiseList = files.map((file) => {
         const formData = new FormData();
         formData.append('file', file);
         return axiosClient.post(action, formData);
      });

      const data = await Promise.allSettled(promiseList);
      setAmountLoading(0);

      const newFileList = data
         .filter((item) => item.status === 'fulfilled')
         .map((item) => item.value);
      newFileList.length && onUpload?.([...fileList, ...newFileList]);

      // check error
      const errors = data
         .filter((item) => item.status === 'rejected')
         .map((item) => item.reason.message);
      errors.length && onError?.(errors);
   };

   const handleFileDrop = (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).slice(0, maxFiles - fileList.length);
      if (files.length === 0) return;
      setAmountLoading(files.length);
      updateFileList(files);
   };

   const handleFileChange = (e) => {
      const files = Array.from(e.target.files).slice(0, maxFiles - fileList.length);
      if (files.length === 0) return;
      setAmountLoading(files.length);
      updateFileList(files);
   };

   return (
      <>
         {fileList.length >= 6 ? null : (
            <label
               className={classes.buttonUpload}
               onDrop={handleFileDrop}
               onDragOver={(e) => e.preventDefault()}
            >
               <input type='file' hidden accept='images/*' onChange={handleFileChange} multiple />
               <CloudUploadIcon fontSize='large' />
               <Typography variant='subtitle2'>
                  Click or drag file to this area to upload
               </Typography>
            </label>
         )}

         <Box sx={{ mt: 2 }}>
            {previewImages.map((image, index) => (
               <Box className={classes.previewImage} key={index}>
                  <img src={image} alt='' />
                  <Box className={classes.previewActions}>
                     <IconButton
                        className='action-delete'
                        onClick={() => onRemove(fileList[index])}
                     >
                        <DeleteOutlined />
                     </IconButton>
                  </Box>
               </Box>
            ))}

            {Array(amountLoading)
               .fill()
               .map((_, index) => (
                  <Box className={classes.lazy} key={index}>
                     <Box className={classes.loading}>
                        <CircularProgress
                           sx={{
                              color: '#fff',
                           }}
                           size={40}
                        />
                     </Box>
                  </Box>
               ))}
         </Box>
      </>
   );
};

export default ImageUpload;
