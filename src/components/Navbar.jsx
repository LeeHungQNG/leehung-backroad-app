import React from 'react';
import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul> */}
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            // const { id, href, icon } = link;
            return (
              <SocialLink key={link.id} {...link} itemClass={'nav-icon'} />
              // <li key={id}>
              //   <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
              //     <i className={icon} />
              //   </a>
              // </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
