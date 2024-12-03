
const initialState = {
    value: 0,
};

const Counter = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return { ...state, value: state.value + 1 };
    } else if (action.type === 'DECREMENT') {
        return { ...state, value: Math.max(state.value - 1, 0) };
    } else if (action.type === 'INCREMENT_BY_10') {
        return { ...state, value: state.value + 10 };
    } else if (action.type === 'DECREMENT_BY_10') {
        return { ...state, value: Math.max(state.value - 10, 0) };
    } else if (action.type === 'RESET') {
        return { ...state, value: 0 };
    } else {
        return state;
    }
};

export default Counter;
