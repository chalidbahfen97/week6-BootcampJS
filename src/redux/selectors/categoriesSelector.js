const findCategoryById= (state,props)=>{
    const category = state.categoryState.categories.filter(v => v.cate_id === props.action.id);
    return category;
}



export {findCategoryById}