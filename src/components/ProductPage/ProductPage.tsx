import { Link, useParams } from "react-router-dom";
import type Product from "../Products/types/Product";
import { useEffect, useState } from "react";
import styles from './ProductPage.module.css'

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  async function fetchProduct(): Promise<void> {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const obj = await res.json();
    setProduct(obj);
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  return (
    <div>
      <h2>Product Page</h2>
      <p>{product?.title}</p>
      <p>{product?.description}</p>
      <p>{product?.price} $</p>
      <p>{product?.category}</p>
      <img className={styles.image} src={product?.image} alt="" /><br />
      <Link to="../products">К списку товаров</Link>
    </div>
  )
}
//useParams — это хук из библиотеки React Router,
//  который позволяет получать параметры из URL в компонентах React.
//  Он особенно полезен, когда нужно извлечь динамические части маршрута,
//  например, идентификаторы пользователей, товаров и т. д.
