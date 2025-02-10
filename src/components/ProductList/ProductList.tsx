import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductList(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  async function getProducts(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li className={styles.productCard} key={product.id}>
            <div className={styles.title}>Title: {product.title}</div>
            <div className={styles.price}>Price: {product.price} $$</div>
             <img className={styles.image} src={product.image} alt="Image" />
            <div className={styles.category}>Category: {product.category}</div>
            <div className={styles.description}>
              Description: {product.description}
            </div>
            <div className={styles.rating}>Rating:</div>
            <div className={styles.rate}>Rate: {product.rating.rate}</div>
            <div className={styles.count}>Count: {product.rating.count}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
