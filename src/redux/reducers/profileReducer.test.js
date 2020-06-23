import profileReducer from "./profileReducer";
import {addPostActionCreator} from "../actions/profileActions";

it('should add a post', () => {
	//  test data
	let action = addPostActionCreator('test message');

	//  test actions
	let newState = profileReducer(initialState, action);
	//  expectations
	expect(newState.posts.length).toBe(7)
});

    //  test data

let initialState = {
	posts: [
		{id: 1, name: "B-Complex", text: "Beautiful lies"},
		{id: 2, name: "Calibre", text: "Mr. Majestic"},
		{id: 3, name: "High Contrast", text: "Drop It Down"},
		{id: 4, name: "DC Breaks", text: "Pickett Line"},
		{id: 5, name: "Netsky", text: " I Refuse"},
		{id: 6, name: "Artificial Intelligence", text: "Desperado"},

	]
};