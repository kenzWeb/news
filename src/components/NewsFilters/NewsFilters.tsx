import {useTheme} from '../../context/ThemeContext.js'
import {IFilters} from '../../interfaces/index.js'
import {useAppDispatch} from '../../store/index.js'
import {useGetCategoriesQuery} from '../../store/services/newsApi.js'
import {setFilters} from '../../store/slices/newsSlice.js'
import {Categories} from '../Categories/Categories.js'
import Search from '../Search/Search.jsx'
import Slider from '../Slider/Slider.jsx'
import styles from './styles.module.css'

interface Props {
	filters: IFilters
}

export default function NewsFilters({filters}: Props) {
	const {data} = useGetCategoriesQuery(null)
	const {isDark} = useTheme()

	const dispatch = useAppDispatch()

	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) =>
							dispatch(setFilters({key: 'category', value: category}))
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) =>
					dispatch(setFilters({key: 'keywords', value: keywords}))
				}
			/>
		</div>
	)
}
