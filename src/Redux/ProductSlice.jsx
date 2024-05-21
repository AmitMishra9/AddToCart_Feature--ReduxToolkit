import { createSlice } from "@reduxjs/toolkit";

export const STATUSE=Object.freeze(
    {
        SUCCESS:'SUCCESS',
        Error:'Error',
        Loding:'Loading',
    }
)
const productSlice=createSlice({
      name:'products',
      initialState:{
          data:[],
          status:STATUSE,
      },
      reducers:{
         setproducts(state,action){
            state.data=action.payload;     
         },
         setStatus(state,action){
             state.status=action.payload;
         }
         
      }

})

export const {setStatus,setproducts} = productSlice.actions;
export default  productSlice.reducer;

// middleware 

export function fetchProducts(){
   return  async function fetchProductsThunk(dispatch){
      dispatch(setStatus(STATUSE.Loding));
    try {
       const res=await fetch("https://fakestoreapi.com/products");
       const data=await res.json();
       dispatch(setproducts(data));
       dispatch(setStatus(STATUSE.SUCCESS));
    }catch(error){
         console.error(error);
         dispatch(setStatus(STATUSE.Error)); 
    }

   }   
}