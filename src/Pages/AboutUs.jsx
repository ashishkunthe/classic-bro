import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/AboutUs.module.css"; // Importing the CSS module for styling

function AboutUs() {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        {/* Home navigation link */}
        <Link to="/" className={styles.navButton}>
          Home
        </Link>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to Classic Bro, where we offer a curated collection of men's
          accessories that blend sophistication and elegance. Each piece is
          crafted with precision to elevate your wardrobe, making sure you stand
          out in style.
        </p>
        <p className={styles.description}>
          At Classic Bro, we believe in the timeless appeal of quality
          accessories that define a modern man’s style. Explore our range and
          find the perfect additions to your collection.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
