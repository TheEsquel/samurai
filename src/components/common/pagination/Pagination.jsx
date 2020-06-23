import React from 'react'
import styles from "./Pagination.module.css";

let Pagination = ({totalCount, pageSize, currentPage, onPageChange}) => {
	const pagesCount = Math.ceil(totalCount / pageSize);
	const pages = [];
	for (let i = 1; i < pagesCount; i++) pages.push(i);
	return (
		<div>
			{pages.map((p, index) => {
				if (currentPage === p)
					return <button className={styles.selectedPage}>{p}</button>
				return <button onClick={() => onPageChange(p)}> {p} </button>
			})}
		</div>
	)
};

export default Pagination