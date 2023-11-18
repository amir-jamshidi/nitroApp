import { configureStore } from "@reduxjs/toolkit";
import mainCategoryReducer from './Reducers/mainCategories'
import mainQuestionReducer from './Reducers/mainQuestions'
import singleQuestionReducer from './Reducers/singleQuestion'


const store = configureStore({
    reducer: {
        mainCategories: mainCategoryReducer,
        mainQuestions: mainQuestionReducer,
        singleQuestion: singleQuestionReducer
    }
})

//console.log(store.getState());

export default store;