import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../../components/Nav';
import { withRouter } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Login from '../Login';
import Register from '../Register';
import Home from '../../pages/Home';
import logic from '../../logic';
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_UPDATE_PRODUCT,
  CART_CHECKOUT,
  CART_RETRIEVE,
  FAVORITES_TOGGLE_PRODUCT,
  GLOBAL_LOGOUT,
} from '../../logic/actions';

function App(props) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const dispatch = ({ action, ...params }) => {
    const calculateCartQuantity = cart => cart.reduce((acc, item) => acc + item.quantity, 0);

    switch (action) {
      case CART_ADD_PRODUCT:
        {
          const { product, quantity } = params;
          const newCart = [...cart];
          const index = newCart.findIndex(item => item.product.productId === product.productId);
          if (index === -1) {
            newCart.push({ product, quantity });
          } else {
            const oldQuantity = newCart[index].quantity;
            const newQuantity = oldQuantity + quantity;
            if (newQuantity !== 0) newCart[index] = { product, quantity: newQuantity };
            else newCart.splice(index, 1);
          }
          setCart(newCart);
          setCartQuantity(calculateCartQuantity(newCart));
          logic.saveCart(newCart);
        }
        break;
      case CART_REMOVE_PRODUCT:
        {
          const { product } = params;
          const newCart = [...cart];
          const index = newCart.findIndex(item => item.product.productId === product.productId);
          if (index !== -1) newCart.splice(index, 1);
          setCart(newCart);
          setCartQuantity(calculateCartQuantity(newCart));
          logic.saveCart(newCart);
        }
        break;
      case CART_UPDATE_PRODUCT:
        {
          const { product, quantity } = params;
          const newCart = [...cart];
          const index = newCart.findIndex(item => item.product.productId === product.productId);
          if (index !== -1) newCart[index].quantity = quantity;
          setCart(newCart);
          setCartQuantity(calculateCartQuantity(newCart));
          logic.saveCart(newCart);
        }
        break;
      case CART_CHECKOUT:
        break;

      case CART_RETRIEVE:
        logic.retrieveUser()
          .then(user => setCart(...user.cart));
        break;
      case FAVORITES_TOGGLE_PRODUCT:
        {
          const { product } = params;
          const index = favorites.findIndex(item => item.productId === product.productId);
          let newFavorites = [...favorites];
          if (index === -1) newFavorites.push(product)
            else newFavorites.splice(index,1);
          setFavorites(newFavorites);
        }
        break;

      case GLOBAL_LOGOUT:
        logic.logOut();
        setCart([]);
        break;

      default:
        return;
    }
  };

  logic.dispatch = dispatch;

  const handleLogin = (email, password) => logic.loginUser(email, password);

  return (
    <div className="container">      
      <Nav cartQuantity={cartQuantity}/>
      <Switch>
        <Route
          path="/"
          exact
<<<<<<< HEAD
          render={() => {
          
            return !logic.isLoggedIn ? (
              <DetailScreen  dispatch={dispatch} />
=======
          render={() =>
            !logic.isLoggedIn ? (
              <Landing cart={cart} cartQuantity={cartQuantity} dispatch={dispatch} />
>>>>>>> 67eb74b850a4323d315710561af4374506c9aa4e
            ) : (
              <Redirect to="/home" />
            )
          }
        />
        <Route
          path="/logout"
          render={() => {
            dispatch({action: GLOBAL_LOGOUT});
            return <Redirect to="/" />;
          }}
        />
        <Route
          path="/register"
          render={() => (!logic.isLoggedIn ? <Register /> : <Redirect to="/home" />)}
        />
        <Route
          path="/login"
          render={() => (!logic.isLoggedIn ? <Login /> : <Redirect to="/home" />)}
        />
        <Route
          path="/home"
          render={() => {
            return logic.isLoggedIn ? <Home /> : <Redirect to="/" />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
