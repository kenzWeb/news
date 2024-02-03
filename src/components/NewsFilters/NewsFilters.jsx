import {getCategories} from '../../api/apiNews.js'
import {useFetch} from '../../helpers/hooks/useFetch.js'
import {Categories} from '../Categories/Categories.jsx'
import Search from '../Search/Search.jsx'
import Slider from '../Slider/Slider.jsx'
import styles from './styles.module.css'

export default function NewsFilters({filters, changeFilter}) {
	const {data: dataCategories} = useFetch(getCategories)
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
