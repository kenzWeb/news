import {MainPage} from '@/pages/main'
import Header from '@/widgets/header/ui/Header/Header'
import { useTheme } from '../providers/ThemeProvider'

function BaseLayout() {
	const {isDark} = useTheme()
	return (
		<div className={`app ${isDark ? 'dark' : ''}`}>
			<Header />
			<div className='container'>
				<MainPage />
			</div>
		</div>
	)
}

export default BaseLayout

