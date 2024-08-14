import React from 'react';
import styles from './HomeNav.module.css';

const HomeNav = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.png" alt="Boostify Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <i className={`fas fa-moon ${styles.icon}`}></i>
          <a href="/About" className={styles.navLink}>About</a>
          <a href="/Team" className={styles.navLink}>Our Team</a>
          <a href="/sign-out" className={styles.signOut}>Sign Out</a>
          <div className={styles.userAvatar}>CIT</div>
        </nav>
      </header>
    </div>
  );
};

export default HomeNav;