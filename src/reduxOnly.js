const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const middleware = redux.applyMiddleware;

// action type define
const Buy_Book = "Buy_Book";
const Buy_Pen = "Buy_Pen";
const initalStateBooks = {
    numberOfBooks: 30
}

const initalStatePens = {
    numberOfPens: 10
}


// create action creator
function buyBook() {
    return {
        type: Buy_Book,
        info: "joyonto kumar roy"
    }
}
function buyPen() {
    return {
        type: Buy_Pen,
        info: "kumar roy"
    }
}
// create reducer
const Bookreducer = (state = initalStateBooks, action) => {
    switch (action.type) {
        case Buy_Book:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks + 2,
                info: `${action.info}`
            }
        default:
            return state
    }
}

const Penreducer = (state = initalStatePens, action) => {
    switch (action.type) {
        case Buy_Pen:
            return {
                ...state,
                numberOfPens: state.numberOfPens - 2,
                info: `${action.info}`
            }
        default:
            return state
    }
}
const reducer = combineReducers({
    Book: Bookreducer,
    Pen: Penreducer

})

// logger
const looger = () => {
    return next => {
        return action => {
            const result = next(action);
            console.log("middleware logged", result);
            return result;
        }
    }
}

// function looger() {
//     return function (next) {
//         return function (action) {
//             const result = next(action);
//             console.log("Middleware logged", result);
//             return result;
//         }
//     }
// }

// store reducer
const store = createStore(reducer, middleware(looger));
// get inital state
console.log("Inital state value", store.getState());
// get update state
store.subscribe(() => {
    console.log("Updated values", store.getState());
});
// dispatch action
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyPen())
store.dispatch(buyPen())
store.dispatch(buyPen())