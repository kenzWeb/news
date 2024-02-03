import {getCategories, getNews} from '../../api/apiNews.js'
import Categories from '../../components/Categories/Categories.jsx'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination.jsx'
import Search from '../../components/Search/Search.jsx'
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants/constants.js'
import {useDebounce} from '../../helpers/hooks/useDebounce.js'
import {useFetch} from '../../helpers/hooks/useFetch.js'
import {useFilters} from '../../helpers/hooks/useFilters.js'
import styles from './styles.module.css'

export default function Main() {
	const {filters, changeFilter} = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1000)

	const {data, isLoading} = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

	const {data: dataCategories} = useFetch(getCategories)

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
		<main className={styles.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectCategory={filters.category}
					setSelectCategory={(category) => changeFilter('category', category)}
				/>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilter('keywords', keywords)}
			/>

			<NewsBanner
				isLoading={isLoading}
				item={data && data.news && data.news[0]}
			/>

			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>

			<NewsList isLoading={isLoading} news={data?.news} count={10} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>
		</main>
	)
}
