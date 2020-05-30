import {createStore, applyMiddleware ,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer} from './redux/reducers/productReducer';
import { cartReducer } from './redux/reducers/cartReducer';
import { userSigninReducer, userRegisterReducer } from './redux/reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("causerInfortItems") || null;

const initialState = {cart:{cartItems}, userSignin: {userInfo} };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
});

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;