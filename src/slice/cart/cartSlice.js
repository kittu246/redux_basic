import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";




const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems',
()=>{

   return fetch(url)
    .then((res)=> res.json())
    .catch((err)=> console.log(err))
})




const initialState = {


 bagItems:[],
 amount:0,
 total:0,
 isloading:false
}


 const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers :{
        clearCart:(state)=>{state.bagItems =[]} // if we return here whole iitial state becomes equal to return value.
        ,removeItem:(state,action)=>{
            // console.log(action)
            let itemId = action.payload
            state.bagItems = state.bagItems.filter((item) =>item.id !== itemId)//filter return array
        },
        increaseItem:(state,{payload})=>{

            console.log(payload);
           let selectedItem=  state.bagItems.find((item)=> item.id === payload )// find return a single value
           console.log(selectedItem);
           selectedItem.amount= selectedItem.amount+1;
    },
        decreaseItem:(state,{payload})=>{
            let selectedItem = state.bagItems.find((item)=> item.id === payload)
            
                selectedItem.amount--  ;
            
        },
        calculateTotal: (state)=>{
            let amount = 0;
            let total =0;
            state.bagItems.forEach((item) => {
                amount += item.amount;
                total  += item.amount*item.price
                
            });
            state.amount= amount;
            state.total= total.toFixed(2);

        },
    }
    ,extraReducers:{
        [getCartItems.pending]:(state)=>{
          state.isloading=true;
        },
        [getCartItems.fulfilled]:(state,action)=>{
            state.isloading=false;
            state.bagItems= action.payload;
          },
          [getCartItems.rejected]:(state)=>{
            state.isloading=false;
          }
    }

       

        
    }
)

export const { clearCart,removeItem,increaseItem,decreaseItem,calculateTotal} = cartSlice.actions

export default cartSlice.reducer;