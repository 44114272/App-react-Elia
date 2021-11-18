import React from 'react'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({productDetail}) => {
    return (
        <div>
            {productDetail.map(prod => <div className="card-container card-container-detail" key={prod.id}>
                                        <div className="img-card">
                                            <img src={prod.img} />
                                        </div>
                                        <div className="card-description">
                                            <div className="count-detail">
                                                <h3>{prod.title}</h3>
                                                {<ItemCount initial={1} stock={prod.stock}/>}
                                            </div>
                                            <p>{prod.description}</p>
                                            <div className="price-button-cart">
                                                <h4>{prod.price}</h4>
                                                <Intercambiabilidad />
                                            </div>
                                        </div>
                                    </div>
            )}
        </div>
    )
}

export default ItemDetail
