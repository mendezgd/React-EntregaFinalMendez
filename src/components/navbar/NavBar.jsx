import React from "react";
import { Link } from "react-router-dom";
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
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/requisitos">Requisitos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donde">Donde estamos?</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;