import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../service/getFirestore';
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
      <div className="item-list-container opa">
          { loading ? <div className="spinner-border text-secondary mt-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> : <div>
                                        <h3 className='title-best-products'>Lo mas vendido</h3>
                                        <div className='container-best-products'>
                                        {products.map(prod => <div key={prod.id}>
                                                                  <img 
                                                                   className='best-img'
                                                                   src={prod.img} 
                                                                   alt={prod.description}
                                                                  />
                                                                  <h3 className='best-brand'>{prod.title}</h3>
                                                                  <p className='best-desc'>La Ransom. Esta bicicleta de montaña para enduro pone en tus manos 170 mm de excelencia en ciclismo de montaña para machacar trail, ascender como un rayo, ganar etapas y pasar horas y horas a los pedales. La versión Tuned viene equipada con una horquilla FOX 38, nuestro sistema de suspensión TwinLoc, un grupo SRAM Eagle AXS y componentes de gama alta Syncros para que nada se interponga en tu camino, sea cual sea tu nivel.</p>
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