import {formDate} from '../helpers/formatDate'
import styles from './styles.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>NEWS REACTIFY</h1>
			<p className={styles.date}>{formDate(new Date())}</p>
		</header>
	)
}
