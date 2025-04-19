import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../components/carts/CartItems";

// interface CartItem {
//   image: string;
//   title: string;
//   id: string;
//   name: string;
//   price: string | number;
//   qty: number;
//   sum: number;
// }
interface CartState {
  item: CartItems[];
}
const initialState: CartState = {
  // item: [] as CartItem[],
  item: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // Add itemTo Cart
    addItemToCart: (state, action) => {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        (existingItem.qty += 1), (existingItem.sum += action.payload.price);
      } else {
        state.item.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },

    //Remove Item to Cart
    removeItemFromCart: (state, action) => {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem && existingItem.qty != 1) {
        (existingItem.qty -= 1), (existingItem.sum -= action.payload.price);
      } else {
        state.item = state.item.filter((item) => item.id !== action.payload.id);
      }
    },

    // Remove Product to cart
    removeProductToCart : (state, action) =>{
           state.item = state.item.filter((item) => item.id !== action.payload.id);
    },

    // empty Cart
    emptycart:(state)=>{
        state.item = []
    }
  },
});

export const { addItemToCart, removeItemFromCart, removeProductToCart, emptycart } =
  CartSlice.actions;

export default CartSlice.reducer;
