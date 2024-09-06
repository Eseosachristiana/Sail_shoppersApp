
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/Images/men_banner.png'
import womens_banner from './Components/Assests/Images/womens_banner.png'
import kids_banner from './Components/Assests/Images/kids_banner.png'




const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/LoginSignup' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App;