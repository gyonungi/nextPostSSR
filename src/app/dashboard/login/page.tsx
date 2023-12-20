'use client'
import UserTable from '@/components/userform/UserTable'
import { user, users } from '@/store/user'
import { useStore } from '@nanostores/react'
import { nanoid } from 'nanoid'
import { FC } from 'react'
import styles from './page.module.scss'

type FieldEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
const UserForm: FC = () => {
	const $user = useStore(user)
	const $users = useStore(users)
	const createOrUpdateUser = (e: React.FormEvent) => {
		e.preventDefault()
		if ($user._id !== '') {
			users.set(
				$users.map((u: any) => {
					if (u._id === $user._id) {
						return $user
					} else {
						return u
					}
				})
			)
		} else {
			users.set([
				...$users,
				{
					...$user,
					_id: nanoid(8),
				},
			])
		}
		console.log($users)
		user.set({
			_id: '',
			name: '',
			email: '',
			password: '',
		})
	}
	const setUser = (e: FieldEvent) => {
		user.set({
			...$user,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<>
			<div className={styles.container}>
				<form onSubmit={createOrUpdateUser} className={styles.form}>
					<input
						name='name'
						onChange={setUser}
						value={$user.name}
						id='grid-first-name'
						type='text'
						placeholder='name'
						required
						className={styles.input}
					/>
					<input
						name='email'
						onChange={setUser}
						value={$user.email}
						required
						className={styles.input}
						id='grid-last-name'
						type='email'
						placeholder='Doe@gmail.com'
					/>
					<input
						name='password'
						onChange={setUser}
						value={$user.password}
						required
						className={styles.input}
						id='grid-password'
						type='password'
						placeholder='******************'
					/>
					<button type='submit' className={styles.button}>
						Отправить
					</button>
				</form>
				<UserTable />
			</div>
		</>
	)
}

export default UserForm
