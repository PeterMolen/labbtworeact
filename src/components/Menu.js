import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Menu.css";
import zebralogo from '../images/zebralogo.jpg';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="menu-container">
                <img src={zebralogo} alt="Logo" className="logo" />
                <button className="menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? '|||' : ' |||'}
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/CV" className={`nav-link ${location.pathname === '/CV' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link to="/ELIT" className={`nav-link ${location.pathname === '/ELIT' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            ELIT
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio" className={`nav-link ${location.pathname === '/Portfolio' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;