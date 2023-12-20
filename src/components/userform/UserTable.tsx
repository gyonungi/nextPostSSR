import { user, users } from '@/store/user'
import { useStore } from '@nanostores/react'
import styles from './page.module.scss'
const UserTable = () => {
	const $user = useStore(user)
	const $users = useStore(users)
	const setUser = (u: any) => {
		user.set(u)
	}
	const deleteUser = (id: string) => {
		users.set(
			$users.map((u: any) => {
				if (u._id !== id) {
					return u
				}
			})
		)
	}
	return (
		<>
			<h1>Данные</h1>
			<div className={styles.userBlock}>
				<p className={styles.userBlock__title}>Name</p>
				<p className={styles.userBlock__title}>Email</p>
				<p className={styles.userBlock__title}>Password</p>
				<p className={styles.userBlock__title}>Edit</p>
				<p className={styles.userBlock__title}>Delete</p>
			</div>
			<div>
				{$users.map((u: any) => {
					return (
						u && (
							<div className={styles.TableBlock} key={u._id}>
								<p className={styles.TableBlock____title}>{u.name}</p>
								<p className={styles.TableBlock____title}>{u.email}</p>
								<p className={styles.TableBlock____title}>{u.password}</p>
								<p className={styles.TableBlock____title}>
									<button onClick={() => setUser(u)} className={styles.butDell}>
										Edit
									</button>
								</p>
								<p className={styles.TableBlock____title}>
									<button
										onClick={() => deleteUser(u._id)}
										className={styles.butDell}
									>
										Delete
									</button>
								</p>
							</div>
						)
					)
				})}
			</div>
		</>
	)
}

export default UserTable
