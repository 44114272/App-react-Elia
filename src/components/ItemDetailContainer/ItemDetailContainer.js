import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../Products/getItem';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        getItem.then(res=>{
            setProductDetail(res.filter(prod => prod.id === parseInt(id)));
        })
        .finally(()=>setLoading())
    },[id])
    
    return (
        <div className='item-detail-container'>
            { loading ? <div className="spinner-border text-secondary mt-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> : <ItemDetail productDetail={productDetail}/>
            }
        </div>
    )
}

export default ItemDetailContainer
