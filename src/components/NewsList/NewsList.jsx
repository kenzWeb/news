import NewsItem from '../NewsItem/NewsItem'
import styles from './styles.module.css'

export default function NewsList({news}) {
	return (
		<div className={styles.list}>
			{news.map((item) => {
				return <NewsItem key={item.id} item={item} />
			})}
		</div>
	)
}
