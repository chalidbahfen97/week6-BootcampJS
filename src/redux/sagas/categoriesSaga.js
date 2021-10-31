import {
    all, call, fork, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import apiCategory from '../../api/api-category'
import {  doCategorySucceed, doCategoryFailed, doCreateCategorySucceed, doUpdateCategoryRequest, doUpdateCategorySucceed, doDeleteCategoryRequest, doDeleteCategorySucceed } from '../action/Categories';

function* handleGetCategory(action) {
    const { payload } = action;
    try {
        const result = yield call(apiCategory.list, payload);
        //simpan ke redux store
        yield put(doCategorySucceed(result));
    } catch (error) {
        yield put(doCategoryFailed(error))
    }
}

function* handleCreateCategory(action) {
    const { payload } = action;
    try {
        const result = yield call(apiCategory.createRow, payload);
        //simpan ke redux store
        yield put(doCreateCategorySucceed(result.data));
    } catch (error) {
        yield put(doCategoryFailed(error))
    }
}

function* handleUpdateCategory(action) {
    const { payload } = action;
    try {
        const result = yield call(apiCategory.updateRow, payload);
        //simpan ke redux store
        yield put(doUpdateCategorySucceed(result.data[1][0]));
    } catch (error) {
        yield put(doCategoryFailed(error))
    }
}

function* handleDeleteCategory(action) {
    const { payload } = action;
    try {
        const result = yield call(apiCategory.deleteRow, payload);
        //simpan ke redux store
        yield put(doDeleteCategorySucceed({id:payload,status:result.status}));
    } catch (error) {
        yield put(doCategoryFailed(error))
    }
}

export {handleGetCategory,handleCreateCategory,
    handleUpdateCategory,
    handleDeleteCategory
}