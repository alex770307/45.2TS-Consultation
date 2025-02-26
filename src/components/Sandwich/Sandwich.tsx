import { useState } from "react";
import style from'./Sandwich.module.css'
import { useTheme } from "../../themeContext/useTheme";

export default function Sandwich(): JSX.Element {
  const [ingredients, setIngredients] = useState<string>("Бутербродный конфигуратор: ");
  const { theme, toggleTheme } = useTheme(); // Используем хук для темы

  const addBread = (): void => {
    setIngredients(`${ingredients} хлеб 🍞`);
  };

  const addCheese = (): void => {
    setIngredients(`${ingredients} Сыр 🧀`);
  };

  const addSausage = (): void => {
    setIngredients(`${ingredients} Колбаса 🍠`);
  };

  const addSalad = (): void => {
    setIngredients(`${ingredients} Салат 🥦`);
  };
  const resetResults = (): void => {
    setIngredients("Бутербродный конфигуратор: ");
  };

  return (
    <div className={`${style.container} ${theme === "dark" ? style.dark : style.light}`}>
      <h1>Sendwich</h1>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/06/14/51/sandwiches-5809006_1280.jpg"
        alt="Sendwich"
      />
      <p>{ingredients}</p>
      <button type="button" className={style.button} onClick={addBread}>
        Добавить хлеб 🍞
      </button>
      <button type="button" className={style.button} onClick={addCheese}>
        Добавить сыр 🧀
      </button>
      <button type="button" className={style.button} onClick={addSausage}>
        Добавить колбасу 🍠
      </button>
      <button type="button" className={style.button} onClick={addSalad}>
        Добавить салат 🥦
      </button>
      <button type="button" className={style.button} onClick={resetResults}>
        Удалить
      </button>
          {/* Кнопка для переключения темы */}
          <button type="button" className={style.themeToggle} onClick={toggleTheme}>
        Переключить тему (текущая: {theme})
      </button>
    </div>
  );
}
