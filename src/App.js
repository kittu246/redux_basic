import CartContainer from "./compoments/CartContainer";
import Navbar from "./compoments/Navbar";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal,getCartItems
 } from "./slice/cart/cartSlice";
 import Modal from "./compoments/Modal";

function App() {

  const {bagItems,isloading} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);
 
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(calculateTotal())
  },[bagItems])

  
  useEffect(()=>{
    dispatch(getCartItems())
  },[])

if(isloading){

  return(
    <>
  <div>Is Loading ...</div>
  </>
  )
  
}

  return <>
  {isOpen && <Modal/> }
  
  <Navbar/>
  <CartContainer/>
  </>;
}
export default App;
