import {createStore, applyMiddleware ,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {productListReducer, productDetailsReducer} from './redux/reducers/productReducer';
import { cartReducer } from './redux/reducers/cartReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = {cart:{cartItems}};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer
});

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;