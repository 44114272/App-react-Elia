import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirestore';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();
        db.collection('items').doc(id).get()
        .then(res => {
            setProductDetail({ id: res.id, ...res.data() })
        })
        .finally(()=> setLoading(false))
        // eslint-disable-next-line
    },[]);
    

    return (
        <div className='item-detail-container'>
            { loading ? <LoadingAnimation /> : 
             <ItemDetail productDetail={productDetail}/>
            }
        </div>
    )
}

export default ItemDetailContainer
