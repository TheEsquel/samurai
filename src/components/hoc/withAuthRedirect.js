import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
	class redirectComponent extends React.Component {
		render() {
			if(!this.props.isAuthorized)
				return <Redirect to='/login'/>
			return <Component {...this.props}/>

		}
	}
	const mapStateToProps = (state) => ({
		isAuthorized: state.authorization.isAuthorized
	})
	return connect(mapStateToProps)(redirectComponent)
}

export default withAuthRedirect


