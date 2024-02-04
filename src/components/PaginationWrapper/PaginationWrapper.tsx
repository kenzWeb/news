import {IPaginationProps} from '../../interfaces/index.js'
import Pagination from '../Pagination/Pagination.js'

interface Props extends IPaginationProps {
	children: React.ReactNode
	top?: boolean
	bottom?: boolean
	totalPages: number
}

export default function PaginationWrapper({
	top,
	bottom,
	children,
	...paginationProps
}: Props) {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	)
}
