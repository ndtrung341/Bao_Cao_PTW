export function capitalize(str) {
   if (!str) return;
   return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function numberWithDots(value) {
   return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function formatCurrency(value) {
   return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
      +value
   );
}
