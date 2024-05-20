import {useAppDispatch, useAppSelector} from '@/app/appStore'
import {useGetNewsQuery} from '@/entities/news/api/newsApi'
import {setFilters} from '@/entities/news/model/newsSlice'
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination'
import {TOTAL_PAGES} from '@/shared/constants/constants'
import {useDebounce} from '@/shared/hooks/useDebounce'
import NewsList from '@/widgets/news/ui/NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters'
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
