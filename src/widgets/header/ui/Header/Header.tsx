import {useTheme} from '@/app/providers/ThemeProvider.js'
import ThemeButton from '@/features/theme/ui/ThemeButton/ThemeButton'
import {formDate} from '@/shared/helpers/formatDate'
import styles from './styles.module.css'

export default function Header() {
	const {isDark} = useTheme()
	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>NEWS KENZO</h1>
				<p className={styles.date}>{formDate(new Date())}</p>
			</div>

			<ThemeButton />
		</header>
	)
}
