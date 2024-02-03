import {TOTAL_PAGES} from '../../constants/constants.js'
import NewsBanner from '../NewsBanner/NewsBanner.jsx'
import NewsFilters from '../NewsFilters/NewsFilters.jsx'
import NewsList from '../NewsList/NewsList.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import styles from './styles.module.css'

export default function NewsByFilters({
	filters,
	changeFilter,
	isLoading,
	news,
}) {
	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = (page_number) => {
		changeFilter('page_number', page_number)
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter} />
			<NewsBanner isLoading={isLoading} item={news && news && news[0]} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>

			<NewsList isLoading={isLoading} news={news} count={10} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>
		</section>
	)
}
