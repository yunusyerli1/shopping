import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductCreateScreen from './screens/ProductCreateScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import {  useDispatch } from 'react-redux';
import {signout} from './redux/actions/userActions';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  const handleSignout = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">


    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">amazona<span style={{fontSize:"1.2rem"}}>.com.tr</span></Link>
            
        </div>
        <div className="header-links">
            <Link to="/cart">{userInfo ? "My Cart  " : "Cart  "}<i className="fas fa-shopping-cart"></i></Link>
            {
              userInfo 
              ? (
                    <div className="dropdown">
                    <button className="dropbtn">{userInfo.name}<i className="fas fa-caret-down"></i></button>
                    <div className="dropdown-content">
                      <Link to="/profile">Profile</Link>
                      <Link to="/" onClick={handleSignout}>Sign Out</Link>
                    </div>
                  </div>
                )
              : <Link to="/signin">Signin</Link>
            }

            
            
        </div>
    </header>

    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li><Link to="/">Pants</Link></li>
            <li><Link to="/">Shirts</Link></li>
            <li><Link to="/products">Product Control</Link></li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/products" component={ProductCreateScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          
            
        </div>
    </main>



    <footer className="footer">
        All right reserved
    </footer>


</div>
</BrowserRouter>
  );
}

export default App;
