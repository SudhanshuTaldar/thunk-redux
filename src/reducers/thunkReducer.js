const init = { counter: 0}
const thunkReducer = (state = init, action) => {
    switch (action.type) {
        case "LOADING":
            return {...state,
                loading:true
            }
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,loading:false
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}
export default thunkReducer