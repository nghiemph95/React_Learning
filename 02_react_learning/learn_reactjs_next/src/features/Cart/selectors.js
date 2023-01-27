import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart.cartItems;

/** Count number of products in cart */
/** createSelecor sẽ có 2 phần:
 * 1. Phần phụ thuộc: cartItemSelector
 * 2. Phần kết quả: kết quả tính toán
 */
export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item, 0)
);

/** Calculate total of cart */
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
);

/** Lưu ý: mỗi lần gặp state có thể tính toán và phụ thuộc vào state khác
 * thì nhớ tới Selector nhằm giúp tính toán những dữ liệu dẫn xuất,
 * và nó chỉ tính toán khi thằng phụ thuộc thay đổi
 */
