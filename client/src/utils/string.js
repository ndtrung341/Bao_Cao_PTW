export function capitalize(str) {
   if (!str) return;
   return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function formatNumber(value) {
   return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
