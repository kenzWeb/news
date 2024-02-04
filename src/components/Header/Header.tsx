import {themeIcons} from '../../assets/index.js'
import {useTheme} from '../../context/ThemeContext.js'
import {formDate} from '../../helpers/formatDate.js'
import styles from './styles.module.css'

export default function Header() {
	const {isDark, toggleTheme} = useTheme()
	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>NEWS KENZO</h1>
				<p className={styles.date}>{formDate(new Date())}</p>
			</div>

			<img
				src={isDark ? themeIcons.light : themeIcons.dark}
				className={styles.theme}
				alt='theme'
				width={30}
				onClick={toggleTheme}
			/>
		</header>
	)
}
