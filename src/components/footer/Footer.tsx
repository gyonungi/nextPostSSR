import { FC } from 'react'
import styles from './page.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.container}>
			<div>Next Post &copy;2023. Все права защищены!</div>
		</footer>
	)
}

export default Footer
