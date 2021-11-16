import React, { useState } from 'react'

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
    
    return (
        <div>
            <div className='container-contador'>
                <button className='btn-suma' onClick={itemSuma}>+</button>
                <label className='contador'>{count}</label>
                <button className='btn-resta' onClick={itemResta}>-</button>
            </div>
        </div>
    )
}

export default ItemCount        