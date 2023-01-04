import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about';
import Shop from './pages/shop'
import ProductDisplay from './components/products/ProductDisplay';
import Cart from './pages/cart'
import Blog from './pages/blog';
import Signin from './pages/auth/signin'
import Signup from './pages/auth/signup'
import BeerPage from './pages/beer';
import Ipa from './pages/products/ipa';
import Ale from './pages/products/ale';
import { useSelector } from 'react-redux';
import './styles/App.scss';
import { ProductsContextProvider } from './context/ProductsContext';
import { PostsContextProvider } from './context/PostsContext';
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import BlogPost from './components/BlogPost';
import BlogPage from './pages/blogPage';

const PrivateRoutes = () => {
  const {isAuth} = useSelector(state => state.auth)

  return <>{isAuth ? <Outlet /> : <Navigate to="/signin" /> }</>
}

const RestrictedRoutes = () => {
  const {isAuth} = useSelector(state => state.auth)

  return <>{!isAuth ? <Outlet /> : <Navigate to='/' />}</>
}
 
function App(props) {
  return (
    <ProductsContextProvider>
      <ShoppingCartProvider>
        <PostsContextProvider>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/'>
              <Route path='/blog' exact element={ <Blog />} />
              <Route path='blog/:name' element={ <BlogPage />} />
            </Route>
            <Route path='/beer' exact element={<BeerPage />} />
            <Route path='/beer/ipa' exact element={<Ipa />} />
            <Route path='/beer/ale' exact element={<Ale />} />

            <Route element={<PrivateRoutes />}>
              <Route path='/shop' element={<Shop />} />
              <Route path='/shop/:id' element={<ProductDisplay />} />
            </Route>

            <Route element={<RestrictedRoutes />}>
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
            </Route>

          </Routes>
        </Router>
        </PostsContextProvider>
      </ShoppingCartProvider>
    </ProductsContextProvider>
  );
}

export default App;
