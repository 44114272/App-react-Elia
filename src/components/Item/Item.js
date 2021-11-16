import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({prod}) => {
    return (
            <Link className="link-cards" to={`/detalle/${prod.id}`}>
                <div className="card-container" key={prod.id}>
                    <div className="img-card">
                        <img loading="lazy" src={prod.img} />
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
            </Link>
    )
}

export default Item
