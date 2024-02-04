import NewsByFilters from '../../components/ NewsByFilters/NewsByFilters.js'
import LatestNews from '../../components/LatestNews/LatestNews.js'
import styles from './styles.module.css'

export default function Main() {
	return (
		<main className={styles.main}>
			<LatestNews />

			<NewsByFilters />
		</main>
	)
}
