import { useState } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  function handleMinus(): void {
    setCounter(counter - 1);
  }

  function handlePlus(): void {
    setCounter(counter + 1);
  }

    function handel100(): void {
      setCounter(counter + 100);
    }
    const resetResults = (): void => {
      setCounter(0);
    };

  return (
    <>
      <h1>Добавление денег</h1>
      <img
        src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
        alt=""
      />
      <div className={`${style.container} ${style.counterClass}`}>
        <button className={style.btn} type="button" onClick={handleMinus}>
          Убрать лишние деньги
        </button>
        <span style={{ color: "red" }}>{counter}</span>
        <button className={style.btn} type="button" onClick={handlePlus}>
          Добавить деньги на счет
        </button>
        <button type="button" className={style.btn} onClick={handel100}>
          Добавить 100 на счёт
        </button>
        <button type="button" className={style.btn} onClick={resetResults}>
          Обнулить
        </button>
      </div>
    </>
  );
}
