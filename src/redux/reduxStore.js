import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebarPage: sidebarReducer,
});

let store = createStore(reducers);
console.log(store);
export default store;