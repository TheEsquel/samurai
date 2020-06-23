import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {InputField} from "./formComponents/formControls";
import {required} from "./validators/validators";
import {login} from "../../redux/thunk/profileThunk";
import {Redirect} from "react-router-dom";
import * as style from './Login.module.css'

let LoginForm = ({handleSubmit, error}) => {
	return(
		<form action="" name='login' onSubmit={handleSubmit}>
			<h4>
				Login form
			</h4>
			<div>
				login: <Field placeholder={'login'} component={InputField} name={'email'} validate={[required]}/>
			</div>
			<div>
				password: <Field placeholder={'password'} component={InputField} name={'password'} validate={[required]} type={'password'}/>
			</div>
			<div>
				remember: <Field component={'input'} name={'rememberMe'}  type={'checkbox'} />
			</div>
			{error && <span className={style["error-message"]}>{error[0]}</span>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
};

LoginForm = reduxForm({
	form: 'login',
})(LoginForm);

const  Login = ({login, isAuth}) => {
	const onSubmit = form => {
		login(form.email, form.password, form.rememberMe )
	};

	return <>
			{isAuth && <Redirect to={'/profile'}/>}
			<div>
				<LoginForm onSubmit={onSubmit}/>
			</div>
		</>
};

const mapStateToProps = state => ({
	isAuth: state.authorization.isAuthorized
});

export default compose(
	connect(mapStateToProps, {login})
)(Login)