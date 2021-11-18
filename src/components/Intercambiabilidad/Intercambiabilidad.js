import {useState} from 'react'
import {Link} from 'react-router-dom'

const Btn1 = ()=>{
    return <Link to='/cart'>
                <button onClick={()=>console.log('Agregaste tu bici al carrito. Haz click en el boton "Ir al carrito" para finalizar tu compra')}>Ir al carrito</button>
            </Link>
}

const Btn2Count = ({handleChange})=>{
    return <button onClick={handleChange}>Add to cart</button>
}

const Intercambiabilidad = () => {
    const [inputType,setInputType] = useState('button');

    const handleChange =()=>{
        setInputType('input');
    }

    return (
        <div>
            {
                inputType === 'button' ? <Btn2Count handleChange={handleChange} /> : <Btn1 />
            }
        </div>
    )
}

export default Intercambiabilidad
