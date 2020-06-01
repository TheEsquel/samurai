import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, logout} from "../../redux/thunk/profileThunk";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        // console.log(this.props);
        return(
            <Header
                isAuthorized={this.props.isAuthorized}
                profile={this.props.profile}
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = state => ({
    profile: state.authorization.profile,
    isAuthorized: state.authorization.isAuthorized,
});

export default compose(
    connect(mapStateToProps, {getAuthData, logout}),
)(HeaderContainer)