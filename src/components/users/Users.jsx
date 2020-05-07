import React from 'react'
import styles from "./Users.module.css";
import defaultPic from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
	const pagesCount = Math.ceil(props.totalCount / props.pageSize);
	const pages = [];
	for (let i = 1; i < pagesCount; i++) pages.push(i);
	return (
		<div>
			<div className={styles["flex-wrap"]}>
				{
					props.users.map(u => {
							const userPic = u.photos.small || defaultPic
							return (<span key={u.id}>
							<div>
								<NavLink to={'/profile/' + u.id}>
									<img src={userPic} alt="" className={styles.userPic}/>
								</NavLink>
								<div>
									{u.name}
								</div>
							</div>
								<div>
								{u.followed
									? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
									: <button onClick={() => props.followUser(u.id)}>Follow</button>
								}
								</div>
						</span>)
						}
					)
				}
			</div>
			{pages.map((p, index) => {
				if (props.currentPage === p)
					return <button className={styles.selectedPage}>{p}</button>
				return <button onClick={() => props.onPageChanged(p)}> {p} </button>
			})}
		</div>
	)
};

export default Users