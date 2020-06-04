import axios from 'axios';
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../types";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get("/api/products/"+productId);
        dispatch({type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }});
        const {cart: {cartItems} } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    }
    catch (error){

    }
}
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    const {cart: {cartItems} } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export const saveShipping = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING, payload: data});
}

export const savePayment = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT, payload: data});
}