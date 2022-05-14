import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const NAV_LINKS = [
   {
      name: 'Trang chủ',
      path: '/',
   },
   {
      name: 'Sản phẩm',
      path: '/collection',
   },
];

export const ADMIN_LINKS = [
   {
      name: 'Sản phẩm',
      path: '/admin/products/',
   },
   {
      name: 'Danh mục',
      path: '/aaaa',
   },
];

export const SETTING_LINKS = [
   {
      name: 'Lịch sử mua hàng',
      path: '/order/history',
      icon: <InfoOutlinedIcon />,
   },
   {
      name: 'Tài khoản',
      path: '/user/account',
      icon: <AccountCircleOutlinedIcon />,
   },
];
