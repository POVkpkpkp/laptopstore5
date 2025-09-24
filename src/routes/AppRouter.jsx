import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Product from '../pages/Product'
import NotFound from '../404/NotFound'
import Login from '../components/Login'
import ProductDetail from '../pages/ProductDetail'
// import Nav from '../components/Nav'
export default function AppRouter() {
  return (
        <>
         {/* <BrowserRouter> */}
         {/* <Nav/> */}
            <Routes> 
                <Route path='*' element={<NotFound/>}/>
                <Route path='/'element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/product/:id'element={<ProductDetail/>}/>
            </Routes>
         {/* </BrowserRouter> */}
        </>
  )
}
