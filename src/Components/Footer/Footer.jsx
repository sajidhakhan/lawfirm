import React from 'react'
import styles from './Footer.module.css';
import LogoImage from "../../assests/logo.png";
import { navLinks } from "../../constants";
import insta from "../../assests/insta.png";
import facebook from "../../assests/fb.png";
import twitter from "../../assests/twitter.png";
import pinterest from "../../assests/pinterest.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <nav className={styles.navbar}>
          <img src={LogoImage} alt="logo" width={130} />        
          <div>
            <ul className={styles.navItems}>
              {navLinks.map((nav) => (
                <li key={nav.id} className={styles.items}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.networks}>
          <a href="https://www.instagram.com/" target="blank">
            <img src={insta} alt="Instagram" />
          </a>

          <a href="https://www.facebook.com/" target="blank">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com/" target="blank">
            <img src={pinterest} alt="Pinterest" />
          </a>
        </div>
        </nav>
       
      <div className={styles.terms}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
