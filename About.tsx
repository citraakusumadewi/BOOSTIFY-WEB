import React from 'react';
import FeatureCard from '../components/FeatureCard';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FaSmile, FaShieldAlt, FaChartLine, FaThumbsUp } from 'react-icons/fa';
import styles from './About.module.css';

// Import your PNG images
// import standImg from '../assets/images/stand.png'; // Image for 🧍
// import smileImg from '../assets/images/smile.png'; // Image for 😄
// import checkImg from '../assets/images/check.png'; // Image for ✔️
// import playImg from '../assets/images/play.png'; // Image for ▶️

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className={styles.main}>
        <section className={styles.textCenter}>
          <h2 className="text-3xl font-bold">FEATURES</h2>
        </section>

        {/* First Section: How It Works */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h3>HOW DOES IT WORK?</h3>
            <ul>
              <li className={styles.emojiColor}><img src="/standImg.png" alt="stand" className={styles.emoji} /> Stand in front of Boostify</li>
              <li className={styles.emojiColor}><img src="/smileImg.png" alt="Smile" className={styles.emoji} /> Smile to the camera</li>
              <li className={styles.emojiColor}><img src="/checkImg.png" alt="Check" className={styles.emoji} /> Presence completes when emoticon appears</li>
            </ul>
          </div>
          <img src="/boostify-device.png" alt="Boostify Device" className={styles.imgSmall} />
        </section>

        {/* Second Section: Boostify Features */}
        <section className={styles.section}>
          <img src="/boostify-device2.png" alt="Boostify Device2" className={styles.imgSmall} />
          <div className={styles.card}>
            <h3>BOOSTIFY FEATURES</h3>
            <ul>
              <li className={styles.emojiColor}><img src="/playImg.png" alt="Play" className={styles.emoji} /> TFT Display</li>
              <li className={styles.emojiColor}><img src="/playImg.png" alt="Play" className={styles.emoji} /> Web Integration</li>
              <li className={styles.emojiColor}><img src="/playImg.png" alt="Play" className={styles.emoji} /> Speaker</li>
              <li className={styles.emojiColor}><img src="/playImg.png" alt="Play" className={styles.emoji} /> Anti Spoofing Protection</li>
            </ul>
          </div>
        </section>

        {/* Vertical Feature Cards */}
        <section className={styles.featureCardsWrapper}>
          <div className={styles.featureCards}>
            <FeatureCard
              title="Happiness and Productivity"
              description="Smiles have a positive effect on mood and productivity. BOOSTIFY integrates happiness in the attendance process."
              icon={<FaSmile size={30} color="#7D0A0A" />}
            />
            <FeatureCard
              title="High Security"
              description="Anti-spoofing system ensures the security of attendance data with advanced facial recognition technology."
              icon={<FaShieldAlt size={30} color="#7D0A0A" />}
            />
            <FeatureCard
              title="Ease of Monitoring"
              description="Live reports and attendance data recap make it easy for management to monitor attendance in real-time."
              icon={<FaChartLine size={30} color="#7D0A0A" />}
            />
            <FeatureCard
              title="Positive Feedback"
              description="A pleasant feedback voice makes the attendance process a positive and motivating experience."
              icon={<FaThumbsUp size={30} color="#7D0A0A" />}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
