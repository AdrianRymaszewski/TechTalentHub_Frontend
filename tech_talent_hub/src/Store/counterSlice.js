import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {counter: 0},
    reducers: {
        increment(state){
            state.counter ++;
        },
        decrement(state){
            state.counter --;
        },
        incrementBy(state, action){
            state.counter += action.payload;
        },
    }
});

// ekosportujemy akcje increment,decrement,incrementBy
export const counterSliceActions = counterSlice.actions;
// eksportujemy slice do stora, aby go móc uzyć, ale nie w komponentach
export default counterSlice.reducer;