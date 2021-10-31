import * as ActionType from '../constant/Categories'
// initial data
const INIT_STATE = {
    categories: [],
    isLoading: false,
    error: null,
    status : null
}

// create reducer
const categoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CATEGORY_REQUEST:
            return applyGetCategoryRequest(state, action);
        case ActionType.GET_CATEGORY_SUCCEED:
            return applyGetCategorySucceed(state, action);
        case ActionType.GET_CATEGORY_FAILED:
            return applyGetCategoryFailed(state, action);
        case ActionType.CREATE_CATEGORY_REQUEST:
            return applyCreateCategoryRequest(state, action);
        case ActionType.CREATE_CATEGORY_SUCCEED:
            return applyCreateCategorySucceed(state, action);
        case ActionType.UPDATE_CATEGORY_REQUEST:
            return applyUpdateCategoryRequest(state, action);
        case ActionType.UPDATE_CATEGORY_SUCCEED:
            return applyUpdateCategorySucceed(state, action);
        case ActionType.DELETE_CATEGORY_REQUEST:
            return applyDeleteCategoryRequest(state, action);
        case ActionType.DELETE_CATEGORY_SUCCEED:
            return applyDeleteCategorySucceed(state, action);
        default:
            return state;
    }
}

//action reducer
const applyGetCategoryRequest = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const applyGetCategorySucceed = (state, action) => {
    return {
        ...state,
        categories: action.payload,
        isLoading: false
    }
}

const applyGetCategoryFailed = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: action.payload.error
    }
}

const applyCreateCategoryRequest = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const applyCreateCategorySucceed = (state, action) => {
    return {
        ...state,
        categories: [...state.categories, action.payload],
        isLoading: false
    }
}

const applyUpdateCategoryRequest = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const applyUpdateCategorySucceed = (state, action) => {
    const { payload } = action;
    const categories = state.categories.map(cate => {
        if (cate.cate_id === payload.cate_id) {
            cate.cate_name = payload.cate_name;
            return cate;
        }
        return cate;
    })
    return {
        ...state,
        categories,
        isLoading: false
    }
}


const applyDeleteCategoryRequest = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const applyDeleteCategorySucceed = (state, action) => {
    const { payload } = action;
    const categories = state.categories.filter(cate => cate.cate_id !== payload.id) 

    return {
        ...state,
        categories,
        isLoading: false,
        status : payload.status
    }
}

export default categoryReducer;