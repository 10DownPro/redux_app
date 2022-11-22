import {  createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import taskReducers from './reducers/taskReducers';

const reducer = combineReducers ({
  Task: taskReducers,
});

const initialState = {};

const middleware = [thunk];

const myStore = createStore (
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default myStore;