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
   {
      name: 'Tin tức',
      path: '/blog',
   },
   {
      name: 'Liên hệ',
      path: '/contact',
   },
];

export const SETTING_LINKS = [
   {
      name: 'Thông tin cá nhân',
      path: '/user/profile',
      icon: <InfoOutlinedIcon />,
   },
   {
      name: 'Tài khoản',
      path: '/user/account',
      icon: <AccountCircleOutlinedIcon />,
   },
];
