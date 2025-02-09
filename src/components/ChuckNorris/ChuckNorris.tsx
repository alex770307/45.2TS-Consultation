import { useEffect, useState } from "react";
import './ChuckNorris.css'



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
        <div className="quote-container">
            {quote ? (
                <>
                    <img src={quote.icon_url} alt="Chuck Norris Icon" className="quote-icon" />
                    <p className="quote-text">{quote.value}</p>
                    <button className="refresh-button" onClick={ fetchQuote}>Обновить цитату</button>
                </>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

