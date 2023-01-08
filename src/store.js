import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
    name: "item",
    initialState: [
        {
            id: 0,
            title: "White and Black",
            count: 10,
        },
        {
            id: 1,
            title: "Red Knit",
            count: 11,
        },
        {
            id: 2,
            title: "Grey Yordan",
            count: 12,
        },
    ],
    reducers: {
        increase(state, id) {
            state[id.payload].count += 1;
        },
        addProduct(state, product) {
            if (state.indexOf(product.payload)) {
                state[product.payload.id].count += 1;
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
    },
});
