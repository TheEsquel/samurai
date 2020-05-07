import axios from "axios";
import {setLoading, setProfileInfo} from "../actions/profileActions";


export const getProfile = (userId) => (dispatch) => {
	dispatch(setLoading(true))
	axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		.then(response => {
			dispatch(setLoading(false));
			dispatch(setProfileInfo(response.data))
		});
}