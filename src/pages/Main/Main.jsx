import {useEffect, useState} from 'react'
import {getCategories, getNews} from '../../api/apiNews.js'
import Categories from '../../components/Categories/Categories.jsx'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination.jsx'
import Search from '../../components/Search/Search.jsx'
import Skeleton from '../../components/Skeleton/Skeleton'
import {useDebounce} from '../../components/helpers/hooks/useDebounce.js'
import styles from './styles.module.css'

export default function Main() {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [categories, setCategories] = useState([])
	const [selectCategory, setSelectCategory] = useState('All')
	const [keywords, setKeywords] = useState('')
	const totalPages = 10
	const pageSize = 10

	const debouncedKeywords = useDebounce(keywords, 1000)

	const fetchNews = async (currentPage) => {
		try {
			setIsLoading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectCategory === 'All' ? null : selectCategory,
				keywords: debouncedKeywords,
			})
			setNews(response.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchCategories = async () => {
		try {
			const response = await getCategories(currentPage, pageSize)
			setCategories(['All', ...response.categories])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchCategories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		fetchNews(currentPage)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, selectCategory, debouncedKeywords])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePageClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				selectCategory={selectCategory}
				setSelectCategory={setSelectCategory}
			/>
			<Search keywords={keywords} setKeywords={setKeywords} />
			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
			{!isLoading ? (
				<NewsList news={news} count={10} />
			) : (
				<Skeleton type={'item'} count={10} />
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</main>
	)
}
