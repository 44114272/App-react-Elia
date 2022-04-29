import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getFirestore} from '../../service/getFirestore';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryID} = useParams();

    useEffect(() => {
        const db = getFirestore(); //conexion con firestore
        const dbQuery = categoryID 
            ? 
        db.collection('items').where('category', '==', categoryID)
            : 
        db.collection('items')

        dbQuery.orderBy('price').get() //traer todo
        .then(data => setProducts( data.docs.map(pro =>({ id: pro.id, ...pro.data()}))))
        .finally(() => setLoading(false))
    },[categoryID])// Agregar una dependencia para q detecte el cambio, cuando detecta q categoryId cambia lanza el useEffect

    return (
        <div className="item-list-container">
                { loading ? <LoadingAnimation /> : <ItemList  products={products} />
                }
        </div>
    )
}

export default ItemListContainer
