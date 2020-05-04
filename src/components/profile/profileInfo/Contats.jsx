import React from 'react'
import styles from './Profile.module.css'

let Contacts = (props) => {
	return (
		<ul className={styles["profile-contacts-ul"]}>
			<li>Facebook: {props.contacts.facebook}</li>
			<li>VK: {props.contacts.vk}</li>
			<li>Twitter: {props.contacts.twitter}</li>
		</ul>
	)

}

export default Contacts