import React from 'react'

function ItemListContainer({greetings,content}) {
    return (
        <div className="item-list-container">
            <h2>{greetings}</h2>
            <h3>{content}</h3>
        </div>
    )
}

export default ItemListContainer
