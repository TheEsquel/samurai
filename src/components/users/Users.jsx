import React from 'react'
import styles from "./Users.module.css";
import defaultPic from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
								{
									u.followed
										? <button onClick={() =>
										{

											axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
												withCredentials: true,
												headers: {
													'API-KEY': "1f202390-21b7-41a0-abd2-37ce0aa89d68"
												}
											})
												.then(response => {
													console.log(response)
													if(response.data.resultCode === 0)
														props.unfollow(u.id)
												});
										}
										}

										>Unfollow</button>


										: <button onClick={() => {
											axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
												withCredentials: true,
												headers: {
													'API-KEY': "1f202390-21b7-41a0-abd2-37ce0aa89d68"
												}
											})
												.then(response => {
													console.log(response)
													if(response.data.resultCode === 0)
														props.follow(u.id)
												});

										}}>Follow</button>
								}

								</div>

						</span>)}
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