import styles from './styles.module.css'

export default function Categories({
	categories,
	setSelectCategory,
	selectCategory,
}) {
	return (
		<div className={styles.categories}>
			{categories.map((category) => {
				return (
					<button
						onClick={() => setSelectCategory(category)}
						className={
							selectCategory === category ? styles.active : styles.item
						}
						key={category}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
}
