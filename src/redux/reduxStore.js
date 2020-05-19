import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authorizationReducer from './reducers/authorizationReducer'
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	authorization: authorizationReducer,
	form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware ));
window.store = store
export default store;