export const BUY_BOOK = 'BUY_BOOK';
const initalState = {
    numberOfBooks: 10
}

const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks > 0 ? state.numberOfBooks - 1 : 0
            }
        default:
            return state
    }
}
export default bookReducer;