"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css"; // Import CSS Module
import data from "../assets/data/HomePage.data.json"; // Import data
import TypingContent from "../components/TypingContent"; // Import TypingContent component

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className="row flex-grow-1 align-items-center justify-content-center">
        <div className={`${styles.banner} col-lg-6 col-md-12`}>
          <Image
            className={`${styles.bannerImg} ani-popIn`}
            src="/profile.jpeg"
            alt="Banner"
            width={300}
            height={300}
          />
        </div>
        <div className={`${styles.content} col-lg-6 col-md-12`}>
          <h1 className={styles.greet}>Hello!!!</h1>
          <h1 className={styles.title}>
            I am <span className={styles.name}>{data.name}</span>
          </h1>
          <TypingContent className={styles.subtitle} data={data.subtitle}></TypingContent>
          <div className={styles.description}>{data.description}</div>
        </div>
      </div>
      <div className={`${styles.actionBtn} flex-shrink-0 py-5 w-100 text-end px-5`}>
        <Link href="/contact" className="btn btn-outline-info">
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default HomePage;