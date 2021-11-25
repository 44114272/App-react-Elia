import React, { useState } from 'react'
import { useCartContext} from '../CartContext/CartContext';
import EndShopping from '../EndShopping/EndShopping';
// import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ productDetail, item })=> {
    const [clicked, setclicked] = useState(false);
    const  addToCart  = useCartContext();

    let available = 5;

    const handleAdd = (counter) => {
        return (evt) => {
            evt.stopPropagation();
            if (counter <= available && counter > 0) {
                addToCart(item, counter);
                setclicked(true);
            }
            else
                alert("Llego al maximo de productos que se pueden agregar.");
        };
    };
    return (
        <div>
            {productDetail.map(prod => <div className="card-container card-container-detail" key={prod.id}>
                <div className="img-card">
                    <img src={prod.img} />
                </div>
                <div className="card-description">
                    <div className="count-detail">
                        <h3>{prod.title}</h3>
                        {!clicked && <ItemCount initial={0} stock={prod.stock} onAdd={handleAdd} />}
                    </div>
                    <p>{prod.description}</p>
                    <div className="price-button-cart">
                        <h4>{prod.price}</h4>
                        {clicked && <EndShopping />}
                        {/* <Intercambiabilidad /> */}
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default ItemDetail
