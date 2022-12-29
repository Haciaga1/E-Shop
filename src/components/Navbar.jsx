import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false);
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white py-3 shadow-sm">
                    <div className="container">
                        <Link className="navbar-brand  fw-bold fs-4" to="/">
                            Logo
                        </Link>
                        <button onClick={() => { setMobileNav(!mobileNav) }} className="navbar-toggler" type="button" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/products">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <div className="buttons">
                                <Link to="/login" className="btn btn-outline-dark">
                                    <i className="fa fa-sign-in me-1"></i>Login
                                </Link>
                                <Link to="/signup" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user-plus me-1"></i>Sign up
                                </Link>
                                <Link to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1"></i>Cart
                                </Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </div><br />
            {mobileNav ?
                <div className='toggle-navbar'>
                    {/* max-width: 992px den asagi dusdukde navbar toggle button ile evez olunur ve 
                            uzerine basdiqda asagidaki linkler acilir */}

                    <div className='mobile-nav'>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons  nav-btn">
                            <Link to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login
                            </Link>
                            <Link to="/signup" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Sign up
                            </Link>
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart
                            </Link>
                        </div>
                    </div>
                </div> : null}
        </>
    );
}

export default Navbar;
