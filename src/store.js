import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import productList from "./store/productList";

let cart = createSlice({
    name: "item",
    initialState: [],
    reducers: {
        increase(state, id) {
            let searchItem = state.findIndex((item) => item.id === id.payload);
            state[searchItem].count++;
        },
        addProduct(state, product) {
            if (state.findIndex((item) => item.id === product.payload.id) > -1) {
                state[product.payload.id].count++;
            } else {
                state.push(product.payload);
            }
        },
    },
});

export let { increase, addProduct } = cart.actions;

export default configureStore({
    reducer: {
        cart: cart.reducer,
        user: user.reducer,
        productList: productList.reducer,
    },
});
