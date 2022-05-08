import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../service/getFirestore';
import LoadingAnimation  from '../LoadingAnimation/LoadingAnimation'
import './BestProducts.css'

const PruebaFirestore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const db = getFirestore();
        db.collection('items').where('price', '>=', 2500).where('price', '<', 3000).get()
        .then(data => setProducts(data.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .finally(() => setLoading(false))
      return () => {
        
      }
    }, [])
  return (
      <div className="item-list-container container-best">
          { loading ? <LoadingAnimation /> : 
            <div>
              <h3 className='title-best-products'>Lo mas vendido</h3>
              <div className='best-products'>
              {products.map(prod => <div key={prod.id}>
                                      <img 
                                        className='best-img'
                                        src={prod.img} 
                                        alt={prod.description}
                                      />
                                      <h3 className='best-brand'>{prod.title}</h3>
                                      <p className='best-desc'>{prod.bigDescription}</p>
                                      <Link 
                                        to={`/detalle/${prod.id}`}
                                        className='link'
                                      >
                                        <button>Ver más</button>
                                      </Link>
                                    </div>
              
              )}
              </div>
          </div>
                }
      </div>
      )
}

export default PruebaFirestore