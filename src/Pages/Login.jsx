import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/Login.module.css"; // Importing the CSS module for styling

function Login() {
  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <Link to="/" className={styles.navButton}>
            Home
          </Link>
        </nav>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" id="email" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
