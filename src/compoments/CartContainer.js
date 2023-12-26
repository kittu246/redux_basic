import React from 'react';
import CartItem from './CartItem';
import {useDispatch, useSelector } from 'react-redux';

import { openModal } from '../slice/modal/modal';

const CartContainer = () => {

  const dispatch = useDispatch();

  const {bagItems,total}  = useSelector((state) => state.cart)

  if(bagItems.length <1){
    return(

        <section>
        <h2>Your Bag is Empty</h2>
        
    </section>

    )
  }
  return (
    <section>
        <h2>Your Bag</h2>
        <div>
            {bagItems.map((item) =>{
                
                return <CartItem key={item.id} {...item}/>

            })}


        </div>
        <div>
            <p>Total :{total} </p>
            
        </div>
        <div>
            <button onClick={()=>{dispatch(openModal())}}> Clear Button</button>
           </div>
    </section>
  )
}

export default CartContainer