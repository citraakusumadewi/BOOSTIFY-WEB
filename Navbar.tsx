import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Boostify Logo" className={styles.logo} />
      </div>
      <div className={styles.navbarContainer}>
        <div className={styles.navLinks}>
        <a href="/About" className={styles.navLink}>About</a>
        <a href="/Team" className={styles.navLink}>Our Team</a>
        <a href="/SignIn" className={styles.signIn}>Sign In</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
