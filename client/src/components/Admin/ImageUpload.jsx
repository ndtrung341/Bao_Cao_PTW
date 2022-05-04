import { makeStyles } from '@material-ui/core';
import { Box, IconButton, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';
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
      width: 120,
      height: 120,
      display: 'inline-block',
      borderRadius: theme.shape.borderRadius,
      border: '2px solid #eee',
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1),
      position: 'relative',
      '& img': {
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
}));

const ImageUpload = ({
   maxFiles = 6,
   onUpload,
   previewImages,
   action,
   fileList = [],
   onSuccess,
}) => {
   const classes = useStyles();
   const handleUpload = async (files) => {
      const uploadReqs = files.map((file) => {
         const formData = new FormData();
         formData.append('file', file);
         return axiosClient.post(action, formData, { baseURL: '' });
      });

      const data = await Promise.allSettled(uploadReqs);
      onSuccess?.(data.map(({ _, value }) => value));
   };

   const handleFileDrop = (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).slice(0, maxFiles - fileList.length);
      // if (files.length) onUpload(files);
      console.log(files);
      if (files.length) handleUpload(files);
   };

   const handleFileChange = (e) => {
      const files = Array.from(e.target.files).slice(0, maxFiles - fileList.length);
      // if (files.length) onUpload(files);
      if (files.length) handleUpload(files);
   };

   return (
      <>
         {previewImages.length >= 6 ? null : (
            <label
               className={classes.buttonUpload}
               onDrop={handleFileDrop}
               onDragOver={(e) => e.preventDefault()}
            >
               <input
                  type='file'
                  hidden
                  accept='images/*'
                  onChange={handleFileChange}
                  multiple
               />
               <CloudUploadIcon fontSize='large' />
               <Typography variant='subtitle2'>
                  Click or drag file to this area to upload
               </Typography>
            </label>
         )}

         <Box sx={{ mt: 1 }}>
            {previewImages.map((image, index) => (
               <Box className={classes.previewImage} key={index}>
                  <img src={image} alt='' />
                  <Box className={classes.previewActions}>
                     <IconButton
                        className='action-delete'
                        // onClick={() => onRemove(index)}
                     >
                        <DeleteOutlined />
                     </IconButton>
                  </Box>
               </Box>
            ))}
         </Box>
      </>
   );
};

export default ImageUpload;
