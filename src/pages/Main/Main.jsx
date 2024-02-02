import {useEffect, useState} from 'react'
import {getNews} from '../../api/apiNews.js'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import NewsList from '../../NewsList/NewsList.jsx'

export default function Main() {
	const [news, setNews] = useState([])
	
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[2]} /> : null}
			<NewsList news={news} />
		</main>
	)
}
