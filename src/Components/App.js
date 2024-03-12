
import { BrowserRouter as Router, Route,Routes,Outlet, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";  
// import Products from "./Products";
import Cart from "./Cart"
import MyCarousel from "./MyCarousel";  
import Footer from './Footer';
import { Jewelry } from './Jewelry';
import { Electronics} from './Electronics';
import {Men} from './Men';
import { Women } from './Women';
import Login from './Login';
import { Signup } from './Signup';
import "../app.css"

function App() {
  return (
   
  <Router>
    <div className='footer-sibling'>
      <Header />

      <Routes >
      <Route exact path="/" Component={MyCarousel} />
        <Route path="/men" Component={Men} />
        <Route path="/women" Component={Women} />
        <Route path="/electronics" Component={Electronics} />
        <Route path="/jewelry" Component={Jewelry} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" component={Jewelry} />
        <Route path="/cart" Component={Cart} />
        </Routes>
      
     
    </div>
    <div><Footer /></div>

  </Router>

  );
}

export default App;
