import {CONSTS} from "../../consts";


export const setAuthorizationData = (userId, email, login, isAuth) => ({type: CONSTS.AUTHORIZATION.SET_LOGIN_DATA, payload: {userId, email, login, isAuth}});