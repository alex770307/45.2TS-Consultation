import { useEffect, useState } from "react";

import style from "./Products.module.css";

 interface Product{
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string;
    }

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  async function fetchProducts(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json();
    setProducts(arr);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <ul className={style.productList}>
        {products.map((product) => (
          <li className={style.productCard}>
            <p className={style.title}>{product.title}</p>
            <img className={style.image} src={product.image} alt="" />
            <p className={style.price}>{`${product.price} $`}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}