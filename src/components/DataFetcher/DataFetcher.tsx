import { useEffect, useState } from 'react';
import styles from './DataFetcher.module.css'

interface DataItem {
    id: number;
    name: string;
    description: string;
}

interface ApiResponseItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function DataFetcher(): JSX.Element{

    const [data,setData] = useState<DataItem[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string | null>(null);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Ошибка загрузки данных");
            }
            return response.json();
          })
          .then((data: ApiResponseItem[]) => {
            const formattedData = data.map((item) => ({
              id: item.id,
              name: item.title,
              description: item.body,
            }));
            setData(formattedData);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }, []);
    
      if (loading) return <p className={styles.loading}>Загрузка...</p>;
      if (error) return <p className={styles.error}>Ошибка: {error}</p>;
    
      return (
        <div className={styles.container}>
          <h2 className={styles.title}>Список данных</h2>
          <ul className={styles.list}>
            {data.map((item) => (
              <li key={item.id} className={styles.item}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    
    
    }