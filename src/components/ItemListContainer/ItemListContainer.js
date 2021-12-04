import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getFirestore} from '../../service/getFirestore'
import { getProducts } from '../Products/getProducts';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryID} = useParams();

    useEffect(() => {
        const db = getFirestore(); //conexion con firestore

        // dbQuery.collection('items').doc('9VfQggRzF2witClgDoVu').get()//traer por id
        // .then(resp => setProd({ id: resp.id, ...resp.data() }))
        const dbQuery = categoryID ? db.collection('items').where('category', '==', categoryID) : db.collection('items')

        dbQuery.get() //traer todo
        .then(data => setProducts( data.docs.map(pro =>({ id: pro.id, ...pro.data()}))))
        .finally(() => setLoading(false))

        // if (categoryID) {//Si categoryID esta definido muestra los products con esa categoria
        // //llamada a la "api"
        // getProducts.then(res=>{
        //     setProducts(res.filter(prod => prod.category === categoryID));//array de productos
        // })
        // .finally(()=>setLoading())
        // } else { //Y si categoryID es undefined muestra todo
        // getProducts.then(res=>{
        //     setProducts(res);//array de productos
        // })
        // .finally(()=>setLoading())
        // }
    },[categoryID])// Agregar una dependencia para q detecte el cambio, cuando detecta q categoryId cambia lanza el useEffect

console.log(products)
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
