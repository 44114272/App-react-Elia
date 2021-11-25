import React from 'react'
import { useCartContext } from '../CartContext'

const btnsCartContext = (productDetail) => {
    const { addCart, removeItem, clearCart} = useCartContext;


    return (
        <div>
            <button onClick={()=>clearCart}></button>
            <button onClick={()=>removeItem}></button>
            <button onClick={()=>addCart}></button>
        </div>
    )
}

export default btnsCartContext
