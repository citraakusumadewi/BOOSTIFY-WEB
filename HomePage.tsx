import React from 'react';
import styles from './HomePage.module.css';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <HomeNav />

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Capture Your Smile, Capture Your Presence</h1>
          <p className={styles.description}>
            This device is an attendance system based on facial recognition technology that requires
            users to smile as a sign of presence. With just a smile, your attendance is automatically 
            recorded and enhancing the positive atmosphere in the workplace or school. Additionally, 
            this device aims to boost people's enthusiasm and motivation to start their day with a smile, 
            creating a more positive and productive environment.
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src="/smile-image.png" alt="Capture Presence" className={styles.mainImage} />
        </div>
      </main>
      <section className={styles.attendanceSection}>
        <h2 className={styles.attendanceTitle}>ATTENDANCE</h2>
        <button className={styles.attendanceButton}>LIVE REPORT</button>
        <button className={styles.attendanceButton}>RECAP</button>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
