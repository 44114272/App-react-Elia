import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className="item-list">
            {products.map(prod => <Item prod={prod}/>
            )}
        </div>
    )
}

export default ItemList
