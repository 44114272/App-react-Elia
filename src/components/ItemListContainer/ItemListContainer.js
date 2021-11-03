import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({greetings,content}) {
    return (
        <div className="item-list-container">
            <h2>{greetings}</h2>
            <h3>{content}</h3>
            <ItemCount initial={1} stock={5} />
        </div>
    )
}

export default ItemListContainer
