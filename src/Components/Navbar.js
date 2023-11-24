import React, { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom"


export default function Navbar(props) {

    const [color,setColor] = useState("blue");
    return (
        <div className='main-navbar' style={{backgroundColor:color}}>
            <div className='top-header'>
                <div className='container'>
                    <div className='top-nav-wrap'>
                        <button
                            onClick={()=>{
                                if(color=="blue"){
                                    setColor("green")
                                }else{
                                    setColor("blue")
                                }
                            }}
                        >click</button>
                        <ul>
                            <li>
                                <Link to="/product-details">Become a seller</Link>
                            </li>
                            <li>
                                <Link to="/ProductDetails">Payments & Recharge</Link>
                            </li>
                            <li>
                                <Link to="/ProductDetails">Help & Support</Link>
                            </li>
                        </ul>
                        <div className='aside-top'>
                            <Link to="/">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.Title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {props.showSearch&&
                            <form className="d-flex ms-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        }
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ProductDetails">Sign Up</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-earth-americas"></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/ProductDetails">Eng</Link></li>
                                    <li><Link className="dropdown-item" to="/ProductDetails">Nep</Link></li>
                                    <li><Link className="dropdown-item" to="/ProductDetails">Fre</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ProductDetails"><i class="fa-solid fa-cart-shopping"></i></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
