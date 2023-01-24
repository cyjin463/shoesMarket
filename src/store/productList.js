import { createSlice } from "@reduxjs/toolkit";

let productList = createSlice({
    name: "productList",
    initialState: [
        {
            id: 0,
            title: "White and Black",
            content: "Born in France",
            price: 120000,
            image: `https://codingapple1.github.io/shop/shoes1.jpg`,
        },
        {
            id: 1,
            title: "Red Knit",
            content: "Born in Seoul",
            price: 110000,
            image: `https://codingapple1.github.io/shop/shoes2.jpg`,
        },
        {
            id: 2,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            image: `https://codingapple1.github.io/shop/shoes3.jpg`,
        },
    ],
    reducers: {
        newProduct(state, action) {
            for (let i = 0; action.payload.length > i; i++) {
                action.payload[i]["image"] = `https://codingapple1.github.io/shop/shoes${
                    action.payload[i].id + 1
                }.jpg`;
                state.push(action.payload[i]);
            }
        },
    },
});

export let { newProduct } = productList.actions;

export default productList;
