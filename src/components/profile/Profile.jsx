import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <PostsContainer
                state = {props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default Profile