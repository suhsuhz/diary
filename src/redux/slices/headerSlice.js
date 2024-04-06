import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    url: ''
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            state.text = action.payload.text;
            state.url = action.payload.url;
        }
    }
});

export const {
    setHeader
} = headerSlice.actions;

export default headerSlice.reducer;