import styles from './styles.module.css'

export default function Pagination({
	totalPages,
	currentPage,
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
}) {
	return (
		<div className={styles.pagination}>
			<button
				disabled={currentPage <= 1}
				onClick={handlePreviousPage}
				className={styles.arrow}
			>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							className={styles.pageNumber}
							disabled={index + 1 === currentPage}
							key={index}
						>
							{index + 1}
						</button>
					)
				})}
			</div>

			<button
				disabled={currentPage >= 10}
				onClick={handleNextPage}
				className={styles.arrow}
			>
				{'>'}
			</button>
		</div>
	)
}
