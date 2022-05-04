import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';

const DropFileInput = () => {
   const wrapperRef = useRef(null);

   const [fileList, setFileList] = useState([]);

   const onDragEnter = () => {};

   const onDragLeave = () => {};

   const onDrop = () => {};

   const onFileDrop = (e) => {
      const newFile = e.target.files[0];
      console.log(newFile);
      if (newFile) {
         const updatedList = [...fileList, newFile];
         setFileList(updatedList);
      }
   };

   return (
      <>
         <div
            ref={wrapperRef}
            className='drop-file-input'
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
         >
            <div className='drop-file-input__label'>
               {/* <img src={uploadImg} alt='' /> */}
               <p>Drag & Drop your files here</p>
            </div>
            <input type='file' value='' onChange={onFileDrop} />
         </div>
      </>
   );
};

export default DropFileInput;
