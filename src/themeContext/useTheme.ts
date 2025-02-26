import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";
// 1️⃣ Импорт зависимостей

// 2️⃣ Создание кастомного хука

export function useTheme(): ThemeContextType{
// Функция useTheme() — это кастомный хук, который возвращает данные из ThemeContext.
// Он гарантирует, что внутри компонента будет доступ к контексту и автоматически выбрасывает ошибку,
// если хук используется вне ThemeProvider.

    //3️⃣ Получение данных из контекста
    const context = useContext(ThemeContext)

    //4️⃣ Проверка на наличие контекста
    if (!context){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
      //Если context равен undefined, то выбрасывается ошибка.
    // Это защищает от ситуации, когда кто-то попытается использовать useTheme() в компоненте,
    //  который не обернут в ThemeProvider.
    return context;

    // 5️⃣ Возвращение контекста
  //Если все в порядке, то функция возвращает context, а значит, все компоненты,
  //  использующие useTheme(), получат доступ к theme и toggleTheme.

}