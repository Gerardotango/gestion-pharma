import './App.css'
import { BrowserRouter , Routes , Route,} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import Product from './pages/product';
import ProductList from './pages/productlist';
import SingleProduct from './pages/singleproduct';
import NavBar from './components/Navbar';


function App() {
 

  return (
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route  path='/'element={<Login/>} />
      <Route  path='/home'element={<Home/>} />
      <Route  path='/about'element={<About/>} />
      <Route  path='/product'element={<Product/>} >
        <Route index element={<ProductList/>}/>
        <Route path=':id' element={<SingleProduct/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default App
