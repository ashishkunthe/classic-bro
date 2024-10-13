import { memo, useEffect, useState } from "react";
import styles from "./Styles/shopping.module.css";
import { NavLink } from "react-router-dom";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

const Shopping = memo(function Shopping() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function shop() {
      try {
        const response = await fetch(`${BASE_URL}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    shop();
  }, []);

  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.navButton}>
        Home
      </NavLink>
      <h1 className={styles.title}>Product List</h1>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            {" "}
            <NavLink to={`${item.id}`}>
              <img
                src={item.images[1] || item.images[0]}
                alt={item.title}
                className={styles.image}
                style={{ width: "100px" }}
              />
              <p className={styles.description}>{item.title}</p>
              <p className={styles.price}>${item.price}</p>
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Shopping;
