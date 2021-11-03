import React from 'react'
import { getPagesArray } from '../../../utils/pages';

function Pagination({ totalPages, page, changePage }) {
	let pagesArray = getPagesArray(totalPages);
	
	return (
		<div className="text-center">
			{pagesArray.map(p =>
				<span
					// onClick = {() => setPage(p)}
					onClick={() => changePage(p)}
					key={p}
					className={p === page ? "page page--current" : "page"}
				>
					{p}
				</span>
			)}
		</div>
	)
}

export default Pagination
