import { useDispatch, useSelector } from 'react-redux';
import { modalActions, selectModalOpen, selectModalOptions } from 'redux/modalSlice';

const useModal = () => {
   const dispatch = useDispatch();
   const open = useSelector(selectModalOpen);
   const modalOptions = useSelector(selectModalOptions);

   const modal = ({ type, title, content, onSubmit }) => {
      dispatch(modalActions.showModal({ type, title, content, onSubmit }));
   };

   const closeModal = () => {
      dispatch(modalActions.closeModal());
   };

   return { open, modalOptions, modal, closeModal };
};

export default useModal;
