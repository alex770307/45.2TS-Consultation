// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// import Counter from './components/Counter/Counter.tsx'
// import PostContainer from './components/PostContainer/index.tsx'
// import Playground from './components/Playground/Playground.tsx'
// import Coctail from './components/Coctail/Coctail.tsx'
// import ProductList from './components/ProductList/ProductList'
// import UsersPage from './components/UsersPage/UsersPage.tsx'
// import Sandwich from './components/Sandwich/Sandwich.tsx'
// import CarShop from './components/CarShop/CarShop.tsx'
// import Bitcoin from './components/Bitcoin/Bitcoin.tsx'


createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<App />
</BrowserRouter>

  // <StrictMode>
  //   <Playground />
  //   <CarShop />
  //   <Counter />
  //   <Sandwich />
  //   <PostContainer />
  //   <Coctail />
  //   <UsersPage />
  //   <ProductList />
  //   <Bitcoin />
  // </StrictMode>,
)
