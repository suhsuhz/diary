import { combineReducers } from "@reduxjs/toolkit";
import diaryReducer from './slices/diarySlice';

const rootReducer = combineReducers({
    diary: diaryReducer
});

export default rootReducer;