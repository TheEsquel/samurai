import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authorizationReducer from './reducers/authorizationReducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	authorization: authorizationReducer,
});

let store = createStore(reducers);
console.log(store);
export default store;