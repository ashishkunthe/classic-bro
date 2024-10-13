import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Styles/ProductDetails.module.css";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the specific product using the id from the URL
    async function fetchProduct() {
      try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]); // Re-run the effect when the id changes

  return (
    <div className={styles.container}>
      <p onClick={() => navigate(-1)} className={styles.backLink}>
        &larr; Back
      </p>
      {product ? (
        <div>
          <img
            src={product.images[1] || product.images[0]}
            alt={product.title}
            className={styles.image}
          />
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
