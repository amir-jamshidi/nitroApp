import { configureStore } from "@reduxjs/toolkit";
import mainCategoryReducer from './Reducers/mainCategories'
import mainQuestionReducer from './Reducers/mainQuestions'
import singleQuestionReducer from './Reducers/singleQuestion'
import authInfoReducer from './Reducers/authInfos'
import allCategoryReducer from './Reducers/allCategories'
import allQuesionReducer from './Reducers/allQuestion'


const store = configureStore({
    reducer: {
        mainCategories: mainCategoryReducer,
        mainQuestions: mainQuestionReducer,
        singleQuestion: singleQuestionReducer,
        authInfos: authInfoReducer,
        allCategories: allCategoryReducer,
        allQuestions: allQuesionReducer
    }
})

//console.log(store.getState());

export default store;