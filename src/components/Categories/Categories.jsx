import styles from './styles.module.css'

export default function Categories({
	categories,
	setSelectCategory,
	selectCategory,
}) {
	return (
		<div className={styles.categories}>
			<button
				onClick={() => setSelectCategory(null)}
				className={!selectCategory ? styles.active : styles.item}
			>
				All
			</button>
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
