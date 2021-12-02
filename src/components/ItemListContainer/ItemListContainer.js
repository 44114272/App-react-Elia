import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../Products/getProducts';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryID} = useParams()

    useEffect(() => {
        if (categoryID) {//Si categoryID esta definido muestra los products con esa categoria
        //llamada a la "api"
        getProducts.then(res=>{
            setProducts(res.filter(prod => prod.category === categoryID));//array de productos
        })
        .finally(()=>setLoading())
        } else { //Y si categoryID es undefined muestra todo
        getProducts.then(res=>{
            setProducts(res);//array de productos
        })
        .finally(()=>setLoading())
        }
    },[categoryID])// Agregar una dependencia para q detecte el cambio, cuando detecta q categoryId cambia lanza el useEffect


    return (
        <div className="item-list-container">
                { loading ? <div className="spinner-border text-secondary mt-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> : <ItemList  products={products} />
                }
            </div>
    )
}

export default ItemListContainer
