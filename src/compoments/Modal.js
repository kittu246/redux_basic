import React from 'react'
import { useDispatch } from "react-redux";
import { closeModal } from '../slice/modal/modal';
import { clearCart } from '../slice/cart/cartSlice';
const Modal = () => {


 
  const dispatch = useDispatch();
  return (
    <aside className='modalBody'>
        <div className='modal'>
            <p>Are you sure want to clear the cart</p>
            <button onClick={() =>{
              dispatch(clearCart());
              dispatch(closeModal())
            }}>confirm</button>
            <button onClick={() =>{
              
              dispatch(closeModal())
            }}>Cancel</button>
        </div>

    </aside>
  )
}

export default Modal