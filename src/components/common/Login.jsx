import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {InputField} from "./formComponents/formControls";
import {required} from "./validators/validators";
import {login} from "../../redux/thunk/profileThunk";
import {Redirect} from "react-router-dom";

let LoginForm = props => {
	return(
		<form action="" name='login' onSubmit={props.handleSubmit}>
			<p>
				Login form
			</p>
			<div>
				login: <Field placeholder={'login'} component={InputField} name={'email'} validate={[required]}/>
			</div>
			<div>
				password: <Field placeholder={'password'} component={InputField} name={'password'} validate={[required]} type={'password'}/>
			</div>
			<div>
				remember: <Field component={'input'} name={'rememberMe'}  type={'checkbox'} />
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
};

LoginForm = reduxForm({
	form: 'login',
})(LoginForm);

const  Login = props  => {
	console.log(props);
	const onSubmit = form => {
		console.log(form);
		props.login(form.email, form.password, form.rememberMe )
	};

	return <>
			{props.isAuth && <Redirect to={'/profile'}/>}
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