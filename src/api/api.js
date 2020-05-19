import axios from "axios";

const instance  = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		'API-KEY': "1f202390-21b7-41a0-abd2-37ce0aa89d68"
	}
})


export const usersAPI = {
	unfollowUser (id){
		return instance.delete(`follow/${id}`, {})
			.then(response => {
				console.log(response)
				return response
			})
	},
	followUser (id){
		return instance.post(`follow/${id}`, {}, {})
	},
	getUsers (currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},

}

export const profileAPI = {
	getAuthData () {
		return instance.get(`auth/me`)
			.then(response => {
				return response.data
			});
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
			.then(response => {
				console.log(response)
				return response
			})
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
			.then(response => {
				return response
			})
	},
	setStatus(status) {
		return instance.put(`profile/status/`, {status})
			.then(response => {
				return response
			})
	}
}