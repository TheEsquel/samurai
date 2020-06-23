import React from 'react'
import styles from "./Users.module.css";
import defaultPic from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import Pagination from "../common/pagination/Pagination";

let User = ({user, follow, unfollow}) => {
	const userPic = user.photos.small || defaultPic
	return (
		<div>
			<div>
				<NavLink to={'/profile/' + user.id}>
					<img src={userPic} alt="" className={styles.userPic}/>
				</NavLink>
				<div>
					{user.name}
				</div>
			</div>
			<div>
				{user.followed
					? <button onClick={() => unfollow(user.id)}>Unfollow</button>
					: <button onClick={() => follow(user.id)}>Follow</button>
				}
			</div>
		</div>
	)
};

export default User