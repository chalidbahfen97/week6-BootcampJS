import { takeEvery, all } from 'redux-saga/effects';
import * as ActionType from '../constant/Categories';
import {handleCreateCategory, 
        handleDeleteCategory, 
        handleGetCategory,handleUpdateCategory} 
from '../sagas/categoriesSaga'

function *watchAll(){
    yield all([
        takeEvery(ActionType.GET_CATEGORY_REQUEST,handleGetCategory),
        takeEvery(ActionType.CREATE_CATEGORY_REQUEST,handleCreateCategory),
        takeEvery(ActionType.UPDATE_CATEGORY_REQUEST,handleUpdateCategory),
        takeEvery(ActionType.DELETE_CATEGORY_REQUEST,handleDeleteCategory)
    ])
}

export default watchAll;