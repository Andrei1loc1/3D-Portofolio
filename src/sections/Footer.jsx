import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-3 justify-between lg:gap-60 gap-4">
      <div><p>Terms and conditions</p></div>
      <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin size={24} />
        </a>
      </div>
      <div><p>© 2025 Andrei. All rights reserved.</p></div>
    </footer>
  );
};

export default Footer;