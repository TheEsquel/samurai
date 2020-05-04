import React from 'react';
import styles from './Profile.module.css';
import Contacts from "./Contats";

const Profile = (props) => {
	if(!props.profile)
		return <></>
	return (
		<div className={styles["flex-wrap"]}>
			<div className={styles["profile-picture profile-block"]}>
				<img src={props.profile.photos.small} alt="" className={styles["profile-picture-image"]}/>
				<div>ID: {props.profile.userId}</div>
			</div>
			<div className={styles["profile-info-block"]}>
				<div className={styles["profile-info-status"]}>{props.profile.aboutMe}</div>
				<div className={styles["profile-info-name"]}>{props.profile.fullName}</div>
				<Contacts contacts={props.profile.contacts}/>
			</div>
		</div>
	)

};

export default Profile