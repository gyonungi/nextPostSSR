'use client'
import Card from '@/components/card/Card'
import Link from 'next/link'
import { useState } from 'react'
import Pagination from '../../components/pagination/Pagination'
import { paginate } from '../../components/pagination/pagin'
import styles from './page.module.scss'

type TypePosts = {
	userId: number
	id: number
	title: string
	completed: boolean
}
async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
// eslint-disable-next-line @next/next/no-async-client-component
export default async function PostsPage() {
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 5
	const data = await getPosts()

	const onPageChange = (page: string) => {
		setCurrentPage(parseInt(page))
	}
	const paginatedPosts = paginate(data, currentPage, pageSize)

	return (
		<div>
			<div className={styles.position}>
				{paginatedPosts.map((item: TypePosts) => {
					return (
						<>
							<Link href={`/posts/${item.id}`}>
								<Card key={item.id} {...item} />
							</Link>
						</>
					)
				})}
			</div>
			<Pagination
				items={data.length}
				currentPage={currentPage}
				pageSize={pageSize}
				onPageChange={onPageChange}
			/>
		</div>
	)
}
