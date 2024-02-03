import {getNews} from '../../api/apiNews.js'
import NewsByFilters from '../../components/ NewsByFilters/NewsByFilters.jsx'
import {PAGE_SIZE} from '../../constants/constants.js'
import {useDebounce} from '../../helpers/hooks/useDebounce.js'
import LatestNews from '../../components/LatestNews/LatestNews'
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

	return (
		<main className={styles.main}>
			<LatestNews isLoading={isLoading} banners={data && data.news} />

			<NewsByFilters
				news={data?.news}
				isLoading={isLoading}
				filters={filters}
				changeFilter={changeFilter}
			/>
		</main>
	)
}
