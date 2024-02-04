import {useTheme} from '../../context/ThemeContext'
import {IPaginationProps} from '../../interfaces'
import styles from './styles.module.css'

export default function Pagination({
	totalPages,
	currentPage,
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
}: IPaginationProps) {
	const {isDark} = useTheme()

	return (
		<div
			className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
		>
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
