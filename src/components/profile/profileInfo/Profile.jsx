import React from 'react';
import styles from './Profile.module.css';
import Contacts from "./Contats";
import ProfileStatus from "./ProfileStatus";

class Profile extends React.Component {

	render(){
		if(!this.props.profile)
			return <></>
	const {photos, userId, aboutMe, fullName, lookingForAJobDescription, contacts} = this.props.profile;
		return (
			<div className={styles["flex-wrap"]}>
				<div className={styles["profile-picture profile-block"]}>
					<img src={photos.small} alt="" className={styles["profile-picture-image"]}/>
					<div>ID: {userId}</div>
				</div>
				<div className={styles["profile-info-block"]}>
					<div>
						<ProfileStatus status={this.props.status}  updateStatus={this.props.updateStatus}/>
					</div>
					<div className={styles["profile-info-status"]}>{aboutMe}</div>
					<div className={styles["profile-info-name"]}>{fullName}</div>
					<div>Looking: {lookingForAJobDescription}</div>
					<Contacts contacts={contacts}/>
				</div>
			</div>
		)
	}


}

export default Profile