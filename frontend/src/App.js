import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductCreateScreen from './screens/ProductCreateScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">


    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">amazona</Link>
        </div>
        <div className="header-links">
            <Link to="/cart">Cart</Link>
            {
              userInfo 
              ? <Link to="/profile">{userInfo.name}</Link>
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
        <Route path="/products" component={ProductCreateScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
            
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
