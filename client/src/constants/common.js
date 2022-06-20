import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import RateReviewIcon from '@mui/icons-material/RateReview';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';

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
      name: 'Người dùng',
      path: '/admin/users/',
      icon: <PersonIcon />,
   },
   {
      name: 'Hóa đơn',
      path: '/admin/orders',
      icon: <ReceiptIcon />,
   },
   {
      name: 'Đánh giá',
      path: '/admin/reviews/',
      icon: <RateReviewIcon />,
   },
   {
      name: 'Sản phẩm',
      path: '/admin/products/',
      icon: <InventoryIcon />,
   },
   {
      name: 'Danh mục',
      path: '/admin/categories',
      icon: <CategoryIcon />,
   },
];

export const SETTING_LINKS = [
   {
      name: 'Đơn mua',
      path: '/purchase',
      icon: <InfoOutlinedIcon />,
   },
   {
      name: 'Tài khoản',
      path: '/user/account',
      icon: <AccountCircleOutlinedIcon />,
   },
];

export const PURCHASE_TYPE = [
   {
      type: 0,
      key: 'all',
      label: 'Tất cả',
   },
   {
      type: 1,
      key: 'pending',
      label: 'Chờ xác nhận',
   },
   {
      type: 2,
      key: 'shipping',
      label: 'Chờ giao hàng',
   },
   {
      type: 3,
      key: 'completed',
      label: 'Đã giao',
   },
   {
      type: 4,
      key: 'cancelled',
      label: 'Đã hủy',
   },
];
