import { combineReducers } from "@reduxjs/toolkit";
import diaryReducer from './slices/diarySlice';
import headerReducer from './slices/headerSlice'

const rootReducer = combineReducers({
    header: headerReducer,
    diary: diaryReducer,
});

export default rootReducer;