import {TOTAL_PAGES} from '../../constants/constants.js'
import {useDebounce} from '../../helpers/hooks/useDebounce.js'
import {useAppDispatch, useAppSelector} from '../../store/index.js'
import {useGetNewsQuery} from '../../store/services/newsApi.js'
import {setFilters} from '../../store/slices/newsSlice.js'
import NewsFilters from '../NewsFilters/NewsFilters.js'
import NewsList from '../NewsList/NewsList.js'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper.js'
import styles from './styles.module.css'

export default function NewsByFilters() {
	const dispatch = useAppDispatch()

	const filters = useAppSelector((state) => state.news.filters)
	const debouncedKeywords = useDebounce(filters.keywords, 1000)
	const {data, isLoading} = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	})

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
		}
	}

	const handlePageClick = (pageNumber: number) => {
		dispatch(setFilters({key: 'page_number', value: pageNumber}))
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />
			<PaginationWrapper
				top
				bottom
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}
