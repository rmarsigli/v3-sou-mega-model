import DiversityBg from '../assets/images/diversity-bg.webp'

const BannerDiversity = () => {
	return (
		<div className='bg-[#cfcabe] relative text-black font-poppins font-bold max-lg:text-center flex flex-col items-center lg:items-start justify-start lg:gap-2 lg:p-16 w-full h-full max-h-screen'>
			<div className='lg:z-10 py-4 lg:mt-8 lg:p-4 max-lg:pt-28 lg:bg-white lg:bg-opacity-50 lg:rounded-sm max-lg:px-4'>
				<h2 className='text-xl lg:text-3xl uppercase text-slate-900 lg:border-b lg:border-slate-300 lg:mb-2 pb-2'>Você Tem o Perfil Certo, e Nós Temos a
					Experiência</h2>
				<p className='text-md font-semibold text-slate-700 lg:text-xl'>Há quase 30 anos, lançando talentos reais como o seu!</p>
			</div>
			<img
				src={DiversityBg}
				className='lg:absolute lg:top-0 lg:left-0 w-full max-md:h-[280px] lg:h-full object-cover object-bottom'
				alt='Faça Parte da Mega Diversity!'
			/>
		</div>
	)
}

export default BannerDiversity