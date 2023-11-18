import { configureStore } from "@reduxjs/toolkit";
import mainCategoryReducer from './Reducers/mainCategories'
import mainQuestionReducer from './Reducers/mainQuestions'


const store = configureStore({
    reducer: {
        mainCategories: mainCategoryReducer,
        mainQuestions: mainQuestionReducer
    }
})

//console.log(store.getState());

export default store;