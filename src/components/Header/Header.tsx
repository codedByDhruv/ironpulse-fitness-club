import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuActive, setMenuActive] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Programs', to: '/programs' },
    { label: 'About', to: '/about' },
    { label: 'Trainers', to: '/trainers' },
    { label: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setMenuActive(false);

  return (
    <>
      <header>
        <nav>
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-accent">IRON</span>PULSE
          </Link>
          
          <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
            {navItems.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    style={isActive ? { color: 'var(--accent)' } : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mobile-cta-wrapper">
              <Link to="/contact" className="nav-cta mobile-cta" onClick={closeMenu}>
                Join Now
              </Link>
            </li>
          </ul>

          <Link to="/contact" className="nav-cta desktop-cta">Join Now</Link>

          <button 
            className="nav-toggle" 
            onClick={() => setMenuActive(!menuActive)}
            aria-label="Toggle navigation menu"
          >
            <i className={menuActive ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </nav>
      </header>

      {/* Backdrop overlay */}
      <div 
        className={`nav-overlay ${menuActive ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;
