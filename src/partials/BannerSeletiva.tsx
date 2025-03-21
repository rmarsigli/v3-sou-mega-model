import SeletivaBg from '../assets/images/seletiva-bg.jpg'

const BannerSeletiva = () => {
	return (
		<picture>
			<img
				src={SeletivaBg}
				alt="Seletiva Mega Model"
				className="max-lg:hidden absolute top-0 left-0 h-auto h-full w-full object-cover object-center"
			/>
		</picture>
	)
}

export default BannerSeletiva