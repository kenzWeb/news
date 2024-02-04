import {ForwardedRef, forwardRef} from 'react'
import {CategoriesType} from '../../interfaces'
import styles from './styles.module.css'

interface Props {
	categories: CategoriesType[]
	setSelectedCategory: (category: CategoriesType | null) => void
	selectedCategory: CategoriesType | null
}

export const Categories = forwardRef(
	(
		{categories, setSelectedCategory, selectedCategory}: Props,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		return (
			<div ref={ref} className={styles.categories}>
				<button
					onClick={() => setSelectedCategory(null)}
					className={!selectedCategory ? styles.active : styles.item}
				>
					All
				</button>
				{categories.map((category) => {
					return (
						<button
							onClick={() => setSelectedCategory(category)}
							className={
								selectedCategory === category ? styles.active : styles.item
							}
							key={category}
						>
							{category}
						</button>
					)
				})}
			</div>
		)
	},
)

Categories.displayName = 'Categories'
