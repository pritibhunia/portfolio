import React from 'react';
import styles from '../styles/features.module.css';

const Features = () => {
  return (
    <div className={styles.featureList}>
      <div className={`${styles.featureItem} ani-popIn`}>
        <img src="/cicd.png" alt="CI/CD" className={styles.featureBanner} />
        <h2 className={styles.featureTitle}>CI/CD</h2>
        <p className={styles.featureDesc}>
          Looking at the business side, I feel CI/CD is the best way to automate application deployment with minimal risks of errors and to add new features without a hassle bustle.
        </p>
      </div>
      <div className={`${styles.featureItem} ani-popIn`} style={{ animationDelay: '0.4s' }}>
        <img src="/container.png" alt="Containerization" className={styles.featureBanner} />
        <h2 className={styles.featureTitle}>Containerization</h2>
        <p className={styles.featureDesc}>
          I am focusing on developing microservices as it reduces the dependency and increases the code reusability for the future.
        </p>
      </div>
      <div className={`${styles.featureItem} ani-popIn`} style={{ animationDelay: '0.8s' }}>
        <img src="/cloud.jpeg" alt="Cloud Computing" className={styles.featureBanner} />
        <h2 className={styles.featureTitle}>Cloud Computing</h2>
        <p className={styles.featureDesc}>
          Cloud computing is the beginning of evolutionary computing, and I love to explore new features as they challenge me at my work.
        </p>
      </div>
    </div>
  );
};

export default Features;