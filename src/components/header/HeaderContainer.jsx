import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData} from "../../redux/thunk/profileThunk";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        console.log(this.props);
        return(
            <Header
                isAuthorized={this.props.isAuthorized}
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = state => ({
    profile: state.authorization.profile,
    isAuthorized: state.authorization.isAuthorized,
});

export default connect(mapStateToProps, {getAuthData})(HeaderContainer)