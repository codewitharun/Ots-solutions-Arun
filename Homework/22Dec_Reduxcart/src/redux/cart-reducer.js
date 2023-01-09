import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: { cartItem: [] } };

// cartItem: {
//    1:{item: {id: 1, name:'Smart Tv', price:'200$'}, count:5}
//    2:{item: {id: 2, name:'Smart Tv', price:'200$'}, count:2}
//    3:{item: {id: 3, name:'Smart Tv', price:'200$'}, count:1}
//}

// {id: 1, name:'Smart Tv', price:'200$'}

// action.payload = {id: 1, name:'Smart Tv', price:'200$'}
// action.payload.id = 1
// if 1 is present in cartItem as a key them increase count
// else create a key 1 and assign action.payload as a value to id
// case ADD_CART:
//             if(state.numberCart==0){
//     let cart = {
//         id:action.payload.id,
//         quantity:1,
//         name:action.payload.name,
//         image:action.payload.image,
//         price:action.payload.price
//     }
//     state.Carts.push(cart);
// }
// else{
//     let check = false;
//     state.Carts.map((item,key)=>{
//         if(item.id==action.payload.id){
//             state.Carts[key].quantity++;
//             check=true;
//         }
//     });
//     if(!check){
//         let _cart = {
//             id:action.payload.id,
//             quantity:1,
//             name:action.payload.name,
//             image:action.payload.image,
//             price:action.payload.price
//         }
//         state.Carts.push(_cart);
//     }
// }
// return{
//     ...state,
//     numberCart:state.numberCart+1
// }
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemInCart = state.data.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        state.data = {
          cartItem: [...state.data.cartItem, action.payload],
        };
        console.log(action.payload.qauntity);
      } else {
        state.data = {
          cartItem: [...state.data.cartItem, action.payload],
        };
      }
      // state.data = { cartItem: [...state.data.cartItem, action.payload] };
    },
    removeFromCart: (state, action) => {
      const newArray = state.data.cartItem.filter(
        (item, index) => index !== action.payload
      );
      state.data = { cartItem: newArray };
    },
    removeAll: (state, action) => {
      state.data = { cartItem: action.payload };
    },
  },
});

export const { addCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice;
