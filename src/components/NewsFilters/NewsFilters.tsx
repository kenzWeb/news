import {getCategories} from '../../api/apiNews.js'
import {useFetch} from '../../helpers/hooks/useFetch.js'
import {CategoriesApiResponse, IFilters} from '../../interfaces/index.js'
import {Categories} from '../Categories/Categories.js'
import Search from '../Search/Search.jsx'
import Slider from '../Slider/Slider.jsx'
import styles from './styles.module.css'

interface Props {
	filters: IFilters
	changeFilter: (key: string, value: string | number | null) => void
}

export default function NewsFilters({filters, changeFilter}: Props) {
	const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(
		getCategories,
	)
	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Slider>
					<Categories
						categories={dataCategories.categories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) =>
							changeFilter('category', category)
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilter('keywords', keywords)}
			/>
		</div>
	)
}
