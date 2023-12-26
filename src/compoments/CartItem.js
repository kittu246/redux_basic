import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem,increaseItem,decreaseItem } from '../slice/cart/cartSlice';

const CartItem = ({title,price,img,amount,id}) => {

  const dispatch  = useDispatch();
  return (
    <div>
        <div>
        <img src={img} alt={title}/>
        <div>
            <p>{title}</p>
            <p>{`$${price}`}</p>
            <button onClick={()=>{dispatch(removeItem(id))}}>Remove</button>
        </div>
        </div>
        <div>
            <button onClick={()=>{dispatch(increaseItem(id))}}>Increase</button>
            <p>{amount}</p>
            <button onClick={()=>{
              if(amount === 1){
                dispatch(removeItem(id));
                return;
              }
              dispatch(decreaseItem(id))}}>Decrease</button>
        </div>
    </div>
  )
}

export default CartItem