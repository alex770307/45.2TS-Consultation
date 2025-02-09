import { useEffect, useState } from "react"


export default function Coctail(): JSX.Element {
    const[coctailName, setCoctailName] = useState<string>('');
    const[image, setImage] = useState<string>(''); 

    async function loadCoctail(): Promise<void>{
        const res = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const obj = await res.json();
        const {drinks} = obj;
        const {strDrink, strDrinkThumb} = drinks[0];
        setCoctailName(strDrink)
        setImage(strDrinkThumb)
    }

useEffect(()=>{
   loadCoctail();
    
}, [])

  return (
    <div>
    <h1>Coctail:{coctailName}</h1>
    <img src={image} alt="" />
    <button type="button" onClick={()=> loadCoctail()}>Next Coctail</button>
</div>
  )
}


// import React, { useEffect, useState } from 'react';

// const Coctail: React.FC = () => {
//   const [cocktail, setCocktail] = useState<{ strDrink: string; strDrinkThumb: string } | null>(null);

//   useEffect(() => {
//     const fetchCocktail = async () => {
//       try {
//         const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
//         const data = await response.json();
//         setCocktail(data.drinks[0]);
//       } catch (error) {
//         console.error('Ошибка при получении данных о коктейле:', error);
//       }
//     };

//     fetchCocktail();
//   }, []); // Пустой массив зависимостей, чтобы useEffect выполнялся только при первой отрисовке

//   return (
//     <div>
//       {cocktail ? (
//         <>
//           <h1>{cocktail.strDrink}</h1>
//           <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
//         </>
//       ) : (
//         <p>Загрузка коктейля...</p>
//       )}
//     </div>
//   );
// };

// export default Coctail;
