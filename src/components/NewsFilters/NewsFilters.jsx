import {getCategories} from '../../api/apiNews.js'
import {useFetch} from '../../helpers/hooks/useFetch.js'
import Categories from '../Categories/Categories.jsx'
import Search from '../Search/Search.jsx'
import styles from './styles.module.css'

export default function NewsFilters({filters, changeFilter}) {
	const {data: dataCategories} = useFetch(getCategories)
	return (
		<div className={styles.filters}>
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
		</div>
	)
}
