import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({prod}) => {
    return (
                <Link className="link-cards" to={`/detalle/${prod.id}`}>
                    <div className="card-container" key={prod.id}>
                        <div className="img-card">
                            <img src={prod.img} alt={prod.description}/>
                        </div>
                        <div className="card-description">
                            <div>
                                <h3>{prod.title}</h3>
                            </div>
                            <p>{prod.description}</p>
                            <div className="price-button-cart">
                                <h4>$ {prod.price}</h4>
                                <button>Ver más</button>
                            </div>
                        </div>
                    </div>
                </Link>
    )
}

export default Item
