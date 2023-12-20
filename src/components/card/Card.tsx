import { FC } from 'react'
import styles from './page.module.scss'
type TypePosts = {
	userId: number
	id: number
	title: string
	completed: boolean
}
const Card: FC<TypePosts> = ({ userId, id, title, completed }) => {
	return (
		<div className={styles.cardBlock}>
			<p>{id}</p>
			<h4>{title}</h4>
			<p>{completed}</p>
		</div>
	)
}

export default Card
