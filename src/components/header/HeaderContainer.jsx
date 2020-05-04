import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setProfileData} from '../../redux/actions/authorizationActions'
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                console.log(response.data)
                if(response.data.resultCode === 0){
                    this.props.setProfileData(response.data.data )
                }

            });
    }

    render() {
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

export default connect(mapStateToProps, {setProfileData})(HeaderContainer)