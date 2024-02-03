import {formDate} from '../../helpers/formatDate.js'
import styles from './styles.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>NEWS KENZO</h1>
			<p className={styles.date}>{formDate(new Date())}</p>
		</header>
	)
}
