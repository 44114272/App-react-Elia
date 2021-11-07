import React from 'react'
import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../Products/getProducts';

function ItemListContainer({}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //llamada a la "api"
        getProducts.then(res=>{
            setProducts(res);//array de productos
        })
        .finally(()=>setLoading())
    },[])


    return (
        <div className="item-list-container">
            { loading ? <div className="spinner-border text-secondary mt-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : <ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer
