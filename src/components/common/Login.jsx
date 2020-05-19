import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";

let LoginForm = props => {
	console.log(props);
	return(
		<form action="" name='login' onSubmit={props.handleSubmit}>
			<p>
				Login form
			</p>
			<div>
				<Field placeholder={'login'} component={'input'} name={'login'}/>  login
			</div>
			<div>
				<Field placeholder={'password'} component={'input'} name={'password'}/>  password
			</div>
			<div>
				<Field component={'input'} name={'rememberMe'}  type={'checkbox'} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

LoginForm = reduxForm({
	form: 'login'
})(LoginForm)

const  Login = props  => {

	const onSubmit = form => {
		console.log(form);
	}

	return <>
			<div>
				<LoginForm onSubmit={onSubmit}/>
			</div>
		</>

}

const mapStateToProps = state => {

}

export default compose(
	connect(mapStateToProps, {})
)(Login)