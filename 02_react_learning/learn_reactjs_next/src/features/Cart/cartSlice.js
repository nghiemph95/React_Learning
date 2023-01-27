import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state, action) {
      state.showMiniCart = true;
    },

    hideMiniCart(state, action) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      /** Có 2 TH: Add mới và update số lượng hiện tại */
      const newItem = action.payload; // truyền lên thông tin đầy đủ (id, product, quantity)
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        /** Update new */
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        /** Add new */
        state.cartItems.push(newItem);
      }
    },

    /** Cập nhật số lượng sản phẩm */
    setQuantify(state, action) {
      /** Truyền lên 1 cái payload có thông tin id và quantity */
      const { id, quantity } = action.payload;

      /** Check if product is available in cart */
      const index = state.cartItems.findIndex((x) => x.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;

      /** Hàm filter sẽ trả về 1 mảng mới, mảng mới sẽ bỏ vô cartItem
       * do state ban đầu ở dạng object, nên nó sẽ hỗ trợ đc ImmerJS nên có thể
       * mutate state trực tiếp mà không cần phải clone mới dữ liệu ra
       */
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

/** Action + Reducer */
const { actions, reducer } = cartSlice;

/** Props action */
export const { showMiniCart, hideMiniCart } = actions; // Named export

export default reducer; // default export
