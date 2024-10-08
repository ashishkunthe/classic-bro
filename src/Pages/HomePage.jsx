import { NavLink } from "react-router-dom";
import styles from "./Styles/Home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome! To Classic Bro</h1>
        <div className={styles.navContainer}>
          <NavLink to="login" className={styles.navButton}>
            Login
          </NavLink>
          <NavLink to="about-us" className={styles.navButton}>
            About Us
          </NavLink>
        </div>
      </header>
      <div className={styles.impactText}>
        Discover our exclusive collection of men's accessories that add a touch
        of elegance and style to your wardrobe. Elevate your look with our
        finely crafted pieces that speak sophistication and class.
      </div>
    </div>
  );
}

export default HomePage;
