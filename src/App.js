
import './css/app.css';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Layout from './components/Layout';
import Login from './components/Buyers/Login';
import Signup from './components/Buyers/Signup';
import BuyerAccount from './components/Buyers/BuyerAccount';
import ProductDetail from './components/product/ProductDetail';
import Description from './components/product/Description';
import Review from './components/product/Review';
import Similar from './components/product/Similar';


function App() {
  return (
    <div className=' ' >
      <Router className=' '>
        <Routes>
          
          <Route exact path='/' element={<Layout/>} >

            <Route exact path="/" element={<Home />}></Route>
            <Route exact path='/shop' element={<Shop/>}></Route>
            <Route exact path="/shop/product" element={<ProductDetail/>} >
              <Route exact path='/shop/product' element={<Description/>} />
              <Route exact path='/shop/product/review' element={<Review/>} />
              <Route exact path='/shop/product/similar' element={<Similar/>} />
            </Route>
            <Route exact path='/buyer/account' element={<BuyerAccount/>} ></Route>

          </Route>

          <Route exact path='/login'  element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup/>} ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
