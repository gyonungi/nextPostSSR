import { FC } from 'react'
import styles from './page.module.scss'
type TypePagin = {
	items: number
	pageSize: number
	currentPage: number
	onPageChange: (page: any) => void
}
const Pagination: FC<TypePagin> = ({
	items,
	pageSize,
	currentPage,
	onPageChange,
}) => {
	const pagesCount = Math.ceil(items / pageSize) // 100/10

	if (pagesCount === 1) return null
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

	return (
		<div>
			<ul className={styles.pagination}>
				{pages.map(page => (
					<li
						key={page}
						className={
							page === currentPage ? styles.pageItemActive : styles.pageItem
						}
					>
						<a className={styles.pageLink} onClick={() => onPageChange(page)}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pagination
