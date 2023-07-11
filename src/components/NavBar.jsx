import React from "react";
import CartWidget from "./CartWidget";
import './style.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Productos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Requisitos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Donde estamos?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Galería de Tiro</a>
                            </li>
                            <li className="nav-item">
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;