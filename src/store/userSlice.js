import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: { name: "choi", age: 30 },
    reducers: {
        changeName(state) {
            return { name: "lee", age: 30 };
        },
        changeAge(state, num) {
            state.age += num.payload;
        },
    },
});

export let { changeName, changeAge } = user.actions;

export default user;
