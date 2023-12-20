import Image from 'next/image'
import errorImg from '/public/error.png'
export default function NotFound() {
	return (
		<>
			<Image src={errorImg} width={900} height={800} alt='error' />
			Страница
		</>
	)
}
