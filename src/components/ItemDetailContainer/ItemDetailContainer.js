import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../Products/getItem';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        getItem.then(res=>{
            setProductDetail(res);
        })
    },[])

    return (
        <div className='item-detail-container'>
            <ItemDetail productDetail={productDetail}/>
        </div>
    )
}

export default ItemDetailContainer
