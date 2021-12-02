import React, { useState } from 'react'

const ItemCount = ({initial,stock,onAdd})=> {
    const [items, setitems] = useState(initial)
    const itemSuma = ()=>{
        if(items < stock){
            setitems(items + 1)
        }
    }
    const itemResta = ()=>{
        if(items > initial){
            setitems(items - 1)
        }
    }
    
    const handleOnAdd = () => {
        onAdd(items)
        setitems(initial)
    }
    return (
        <>
            <div>
                <div className='container-contador'>
                    <button className='btn-suma' onClick={itemSuma}>+</button>
                    <label className='contador'>{items}</label>
                    <button className='btn-resta' onClick={itemResta}>-</button>
                </div>
            </div>
            <div className="price-button-cart btn-go-cart">
                <button onClick={handleOnAdd}>Add to cart</button>
            </div>
        </>
    )
}
export default ItemCount        