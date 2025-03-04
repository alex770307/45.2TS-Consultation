
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
import PostContainer from './components/PostContainer'
import ChuckNorris from './components/ChuckNorris/ChuckNorris'
import IpLocation from './components/IpLocation/IpLocation'
import ProductPage from './components/ProductPage/ProductPage'
import DataFetcher from './components/DataFetcher/DataFetcher'
import TodoApp from './components/TodoApp/TodoApp'
import { ThemeProvider } from './themeContext/ThemeProvider'
import App_form from './components/App_form/App_form'

function App() {


  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="coctail" element={<Coctail />} />
          <Route path="bitcoin" element={<Bitcoin />} />
          <Route path="playground" element={<Playground />} />
          <Route path="counter" element={<Counter />} />
          <Route path="carshop" element={<CarShop />} />
          <Route path="postcontainer" element={<PostContainer />} />
          <Route path="products" element={<Products />} />
          <Route path="randomdog" element={<RandomDog />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="userspage" element={<UsersPage />} />
          <Route path="chucknorris" element={<ChuckNorris />} />
          <Route path="iplocation" element={<IpLocation />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="datafetcher" element={<DataFetcher />} />
          <Route path="todoapp" element={<TodoApp />} />
          <Route path="appform" element={<App_form />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );

}

export default App
