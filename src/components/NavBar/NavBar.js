import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import CartWidget from './CartWidget';

const NavBar = () => {
    const { quantityItem } = useCartContext();
    
    return (
    <div>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fs-2 pb-2" >EliaBikes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catalogo
                            </Link>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><Link to='category/mountain' className="dropdown-item text-light">Mountain</Link></li>
                                <li><Link to='category/road' className="dropdown-item text-light">Road</Link></li>
                                <li><Link to='category/kids' className="dropdown-item text-light">Kids</Link></li>
                                <li><Link to='category/womens' className="dropdown-item text-light">Women's</Link></li>
                                <li><Link to='category/accesory' className="dropdown-item text-light">Accesories</Link></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                        <form className="d-flex mx-lg-4">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success " type="submit">Search</button>
                        </form>
                    </div>
                    <div className="d-flex text-light fs-5">
                        <Link className="" to='/cart'> <CartWidget /> </Link>
                        { quantityItem() !== 0 && quantityItem() }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
