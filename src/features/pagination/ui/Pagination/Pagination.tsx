import {IPaginationProps} from '../../model/types.ts'
import PaginationButtons from '../PaginationButtons/PaginationButtons.tsx'

interface Props extends IPaginationProps {
	children: React.ReactNode
	top?: boolean
	bottom?: boolean
	totalPages: number
}

export default function Pagination({
	top,
	bottom,
	children,
	...paginationProps
}: Props) {
	return (
		<>
			{top && <PaginationButtons {...paginationProps} />}
			{children}
			{bottom && <PaginationButtons {...paginationProps} />}
		</>
	)
}
