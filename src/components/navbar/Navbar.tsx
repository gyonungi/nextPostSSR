'use client'

import Link from 'next/link'

import { FC } from 'react'
import styles from './page.module.scss'

const links = [
	{
		id: 1,
		title: 'Главная',
		url: '/',
	},
	{
		id: 2,
		title: 'Посты',
		url: '/posts',
	},
	{
		id: 3,
		title: 'АдминПанель',
		url: '/dashboard/login',
	},
]

const Navbar: FC = () => {
	return (
		<nav className={styles.container}>
			<Link href='/' className={styles.logo}>
				Next Task
			</Link>
			<div className={styles.links}>
				{links.map(link => (
					<Link key={link.id} href={link.url}>
						{link.title}
					</Link>
				))}
			</div>
		</nav>
	)
}

export default Navbar
