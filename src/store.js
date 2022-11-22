import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import toDoReducers from './reducers/taskReducers';

const reducer = combineReducers ({
  Task:toDoReducers
});

const initialState = {};

const middleware = [thunk];

const myStore = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default myStore;