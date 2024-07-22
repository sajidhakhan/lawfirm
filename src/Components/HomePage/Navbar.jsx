import { navLinks } from "../../constants";
import React from "react";
import styles from "./HomePage.module.css";
import LogoImage from "../../assests/logo.png"

const Navbar = () => {
  return (
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
      <button className={styles.button}>Contact Now</button>
    </nav>
  );
};

export default Navbar;