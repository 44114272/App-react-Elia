import React, { useState } from 'react'
import { useCartContext} from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ productDetail })=> {
    const [clicked, setclicked] = useState(false);
    const  {addToCart}  = useCartContext();
    console.log('itemdetail', productDetail);
    
    const onAdd = (quantity) =>{
        addToCart(productDetail, quantity);
        setclicked(true)
    }
    
    return (
        <div>
            {productDetail.map(prod => <div className="card-container card-container-detail" key={prod.id}>
                <div className="img-card">
                    <img src={prod.img} alt={prod.description}/>
                </div>
                <div className="card-description">
                    <div className="count-detail">
                        <h3>{prod.title}</h3>
                        {!clicked && <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} clicked={clicked}/>}
                    </div>
                    <p>{prod.description}</p>
                    <div className="price-button-cart">
                        <h4>${prod.price}</h4>
                        {clicked && <Link to='/cart'><button>Ir al carrito</button></Link>}
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
export default ItemDetail
