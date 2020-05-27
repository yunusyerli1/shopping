import {createStore, applyMiddleware ,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer} from './redux/reducers/productReducer';


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;