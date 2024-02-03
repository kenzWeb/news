import NewsByFilters from '../../components/ NewsByFilters/NewsByFilters.jsx'
import LatestNews from '../../components/LatestNews/LatestNews'
import styles from './styles.module.css'

export default function Main() {
	return (
		<main className={styles.main}>
			<LatestNews />

			<NewsByFilters />
		</main>
	)
}
