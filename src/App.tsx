// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import CarShop from './components/CarShop/CarShop'
import Playground from './components/Playground/Playground'
import Sandwich from './components/Sandwich/Sandwich'
import Coctail from './components/Coctail/Coctail'
import Bitcoin from './components/Bitcoin/Bitcoin'
import Counter from './components/Counter/Counter'
import UsersPage from './components/UsersPage/UsersPage'
import Products from './components/Products/Products'
import RandomDog from './components/RandomDog/RandomDog'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="coctail" element={<Coctail />} />
      <Route path="products" element={<Products />} />
      <Route path="bitcoin" element={<Bitcoin />} />
      <Route path="playground" element={<Playground />} />
      <Route path="counter" element={<Counter />} />
      <Route path="userspage" element={<UsersPage />} />
      <Route path="carshop" element={<CarShop />} />
      <Route path="randomdog" element={<RandomDog />} />
      <Route path="sandwich" element={<Sandwich />} />

        </Route>

      </Routes>
    </>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
