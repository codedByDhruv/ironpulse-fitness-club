import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Programs', to: '/programs' },
    { label: 'About', to: '/about' },
    { label: 'Trainers', to: '/trainers' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <span className="logo-accent">IRON</span>PULSE
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  style={isActive ? { color: 'var(--accent)' } : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/contact" className="nav-cta">Join Now</Link>
      </nav>
    </header>
  );
};

export default Header;
