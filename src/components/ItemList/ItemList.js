import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div>
            {products.map(prod => <Item prod={prod}/>
            
            )}
        </div>
    )
}

export default ItemList
