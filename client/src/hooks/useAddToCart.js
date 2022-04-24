import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addCart } from 'redux/cartSlice';
import { selectIsLoggedIn } from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';

const useAddToCart = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const isLoggedIn = useSelector(selectIsLoggedIn);

   const handleAddToCart = (cartItem) => {
      if (!isLoggedIn) {
         navigate('/auth/login');
      } else {
         // dispatch(cartActions.addItemToCart(cartItem));
         dispatch(addCart(cartItem));
         toast.success('Thêm vào giỏ hàng thành công');
      }
   };

   return { handleAddToCart };
};

export default useAddToCart;
