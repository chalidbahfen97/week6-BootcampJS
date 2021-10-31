import * as ActionType from '../constant/Categories';

export const doCategoryRequest = (payload) => ({
    type: ActionType.GET_CATEGORY_REQUEST,
    payload
})

export const doCategorySucceed = (payload) => ({
    type: ActionType.GET_CATEGORY_SUCCEED,
    payload
})

export const doCategoryFailed = (payload) => ({
    type: ActionType.GET_CATEGORY_FAILED,
    payload
})


export const doCreateCategoryRequest = (payload) => ({
    type: ActionType.CREATE_CATEGORY_REQUEST,
    payload
})

export const doCreateCategorySucceed = (payload) => ({
    type: ActionType.CREATE_CATEGORY_SUCCEED,
    payload
})

export const doUpdateCategoryRequest = (payload) => ({
    type: ActionType.UPDATE_CATEGORY_REQUEST,
    payload
})

export const doUpdateCategorySucceed = (payload) => ({
    type: ActionType.UPDATE_CATEGORY_SUCCEED,
    payload
})

export const doDeleteCategoryRequest = (payload) => ({
    type: ActionType.DELETE_CATEGORY_REQUEST,
    payload
})

export const doDeleteCategorySucceed = (payload) => ({
    type: ActionType.DELETE_CATEGORY_SUCCEED,
    payload
})