import React from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass={'footer-link'} />
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, text, href } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          // const { id, icon, href } = social;
          return (
            <SocialLink key={social.id} {...social} itemClass={'footer-icon'} />
            // <li key={id}>
            //   <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
            //     <i className={icon} />
            //   </a>
            // </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright © Backroads travel tours company
        <span id="date" /> {new Date().getFullYear()} all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
