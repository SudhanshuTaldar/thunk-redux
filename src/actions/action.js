export const loading = () => {
    return {
        type: "LOADING"
    };
};
export const incrementAsync = (val) => {
    return {
        type: "INCREMENT", value: val
    };
};
export const increment = (val) => {
    return dispatch=>{
        dispatch(loading());    
        setTimeout(()=>{
            dispatch(incrementAsync(val))
        },2000)
    }
};
export const decrement = (val) => {
    return {
        type: "DECREMENT", value: val
    };
};