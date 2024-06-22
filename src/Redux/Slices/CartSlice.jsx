import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:  []
},
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>item.no === action.payload.card.no);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                
            }else{
                const tempProduct = {...action.payload.card, cartQuantity: 1};
                state.cartItems.push(tempProduct); 
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        }
    }

});


export const {  addToCart } = cartSlice.actions;
export default cartSlice.reducer;