import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-accent">IRON</span>PULSE
          </Link>
          <p className="footer-desc">Premium fitness club designed for elite transformation and modern athletes who demand the best.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
            <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
            <a href="#" aria-label="Twitter"><i className="ri-twitter-x-line"></i></a>
            <a href="#" aria-label="YouTube"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/about">About</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Programs</h4>
          <Link to="/programs">Strength Training</Link>
          <Link to="/programs">Cardio Fitness</Link>
          <Link to="/programs">Yoga & Mobility</Link>
          <Link to="/programs">Personal Coaching</Link>
          <Link to="/programs">Nutrition Plans</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>support@ironpulse.com</p>
          <p>+91 98765 43210</p>
          <p>Surat, Gujarat, India</p>
          <p style={{ marginTop: '16px', color: 'var(--accent)' }}>Open 24 / 7 — 365 days</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 IRONPULSE Luxury Gym. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
