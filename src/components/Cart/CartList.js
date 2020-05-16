import React from 'react';
import CartItem from './CartItem';
import {Container} from 'react-bootstrap';
export default function CartList({value}) {
    const {cart} = value;
    console.log(cart, value);
    return (

        <div>
            
            {cart.map( item => {
                return (
                <CartItem  key={item.id} item={item} value={value} />
                )
            }) }
           
        </div>
    )
    
    
}

