import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const LOGO = require('assets/img/logo.png');
export const AVATAR_DEFAULT = require('assets/img/avatar-default.png');
export const NAV_LINKS = [
   {
      name: 'Trang chủ',
      path: '/',
   },
   {
      name: 'Sản phẩm',
      path: '/collections',
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
