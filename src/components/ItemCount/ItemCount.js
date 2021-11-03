import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa';

const ItemCount = ({initial,stock})=> {
    const [count,setCount] = useState(initial)

    const itemSuma = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const itemResta = ()=>{
        if(count > initial){
            setCount(count - 1)
        }
    }
    const onAdd = ()=>{
        alert(`Agregaste ${count} productos`)
    }
    
    return (
        <div>
            <div className='container-contador'>
                <button className='btn-suma' onClick={itemSuma}>+</button>
                <label className='contador'>{count}</label>
                <button className='btn-resta' onClick={itemResta}>-</button>
            </div>
            <div className="container-btn-add" onClick={onAdd}>
                <FaShoppingCart className='fs-5'/>
                <button className='btn-add'>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount