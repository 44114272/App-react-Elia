import React from 'react'

const ItemDetail = ({productDetail}) => {
    return (
        <div>
            {productDetail.map(prod => <div className="card-container" key={prod.id}>
                                        <div className="img-card">
                                            <img src={prod.img} />
                                        </div>
                                        <div className="card-description">
                                            <h3>{prod.title}</h3>
                                            <p>{prod.description}</p>
                                            <div className="price-button-cart">
                                                <h4>{prod.price}</h4>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
            )}
        </div>
    )
}

export default ItemDetail
