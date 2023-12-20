import styles from './page.module.css'

async function getComments(id: number) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/comments/${id}`,
		{
			cache: 'no-store',
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const PostsId = async ({ params }: { params: { id: number } }) => {
	const data = await getComments(params.id)
	console.log(data)
	return (
		<div className={styles.container}>
			<p>{data.id}</p>
			<p>{data.name}</p>
			<p>{data.email}</p>
			<p>{data.body}</p>
		</div>
	)
}

export default PostsId
