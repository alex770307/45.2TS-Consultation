import { useEffect, useState } from "react";
import styles from './ChuckNorris.module.css'



export default function ChuckNorris(): JSX.Element {
    const [quote, setQuote] = useState<{ icon_url: string; value: string } | null>(null);

  
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.chucknorris.io/jokes/random');
                const data = await response.json();
                setQuote({ icon_url: data.icon_url, value: data.value });
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
  useEffect(() => {
        fetchQuote();
    }, []);

    return (
      <div className={styles.container}>
        {quote ? (
          <>
            <img
              src={quote.icon_url}
              className={styles.icon}
              alt="Chuck Norris Icon"
            />
            <p className={styles.text}>{quote.value}</p>
            <button className={styles.button} onClick={fetchQuote}>
              Обновить цитату
            </button>
          </>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    );
};

