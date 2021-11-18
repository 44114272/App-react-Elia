import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catalogo
                            </a>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><Link to='category/mountain' className="dropdown-item text-light">Mountain</Link></li>
                                <li><Link to='category/road' className="dropdown-item text-light">Road</Link></li>
                                <li><Link to='category/kids' className="dropdown-item text-light">Kids</Link></li>
                                <li><Link to='category/womens' className="dropdown-item text-light">Women's</Link></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                        <form className="d-flex mx-lg-4">
                            <input className="form-control me-2 hola" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success " type="submit">Search</button>
                        </form>
                    </div>
                    <Link to='/cart'> <CartWidget /> </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
