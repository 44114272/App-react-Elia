import React, { useState } from 'react'
import { useCartContext} from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productDetail })=> {
    const [clicked, setclicked] = useState(false);
    const {addToCart}  = useCartContext();
    
    const onAdd = (quantity) =>{
        addToCart(productDetail, quantity);
        setclicked(true)
    }
    
    return (
        <div>
            <div className="card-container card-container-detail" key={productDetail.id}>
                <div className="img-card">
                    <img src={productDetail.img} alt={productDetail.description}/>
                </div>
                <div className="card-description">
                    <div className="count-detail">
                        <h3>{productDetail.title}</h3>
                        {!clicked && <ItemCount initial={1} stock={productDetail.stock} onAdd={onAdd} clicked={clicked}/>}
                    </div>
                    <p>{productDetail.description}</p>
                    <div className="price-button-cart">
                        <h4>${productDetail.price}</h4>
                        {clicked && <Link to='/cart'><button>Ir al carrito</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail
