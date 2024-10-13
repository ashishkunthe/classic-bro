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
        Discover Our Exclusive Collection. Explore our diverse range of
        accessories, home furnishings, and gadgets designed for everyone. At
        Classic Bro, we believe that style and functionality should be
        accessible to all. Elevate your look with our thoughtfully curated
        collection of accessories that blend elegance, sophistication, and
        versatility. From timeless classics to modern trends, our accessories
        express your unique personality and enhance your wardrobe. But we don’t
        stop there! Transform your living space with our exquisite selection of
        sofas and home decor, designed to bring comfort and style into your
        home. Whether you’re looking for a cozy corner for relaxation or a
        statement piece for entertaining, we’ve got you covered. And for the
        tech enthusiasts, discover our range of controllers and gadgets that
        enhance your gaming and entertainment experience. Embrace style,
        comfort, and innovation with Classic Bro, where every piece is crafted
        to make you shine.
      </div>
      <NavLink to="shop" className={`${styles.navButton} ${styles.shopNow}`}>
        Shop Now
      </NavLink>
    </div>
  );
}

export default HomePage;
