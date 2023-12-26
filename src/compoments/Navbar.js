import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {amount} = useSelector((state)=> state.cart)
  return (
    <section>
        <nav>
            <span>navbar</span>
        amount is:  {amount}

        </nav>
       

    </section>
  )
}

export default Navbar