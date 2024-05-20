import {useGetLatestNewsQuery} from '@/entities/news/api/newsApi'
import BannersList from '@/widgets/news/ui/BannersList/BannersList'
import styles from './styles.module.css'

export default function LatestNews() {
	const {data, isLoading} = useGetLatestNewsQuery(null)

	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
