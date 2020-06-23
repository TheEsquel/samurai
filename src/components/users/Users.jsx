import React from 'react'
import styles from "./Users.module.css";
import Pagination from "../common/pagination/Pagination";
import User from "./User";

let Users = ({currentPage, onPageChange, pageSize, totalCount, follow, unfollow, ...props}) => {
	return (
		<div>
			<div className={styles["flex-wrap"]}>
				{
					props.users.map(u =>
						<User
							user={u}
							key={u.id}
							follow={follow}
							unfollow={unfollow}
						/>
					)
				}
			</div>
			<Pagination
				currentPage={currentPage}
				onPageChange={onPageChange}
				pageSize={pageSize}
				totalCount={totalCount}
			/>
		</div>
	)
};

export default Users