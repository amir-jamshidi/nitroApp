import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Reducers/mainCategories'
const store = configureStore({
    reducer: {
        categories: categoryReducer
    }
})

console.log(store.getState());

export default store;