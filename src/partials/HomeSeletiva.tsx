import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';
import BannerSeletiva from "./BannerSeletiva";

const HomeSeletiva = () => {
	const { t } = useTranslation();

	return (
		<div>
			<header
				className="relative w-full h-auto lg:h-screen lg:flex lg:flex-col lg:items-start lg:justify-center bg-slate-800 text-white overflow-hidden"
				id="header"
			>
				<BannerSeletiva />
				<div className="absolute max-lg:hidden top-0 left-0 h-full w-full bg-gradient-to-r from-black to-transparent"></div>
				<div className="relative max-lg:mt-32 flex gap-8 lg:gap-4 flex-col items-start text-left justify-center p-8 z-10 max-lg:mb-8">
					<h1 className="text-[#EC7D6C] font-poppins uppercase flex flex-col items-start justify-start gap-2">
						<span className='text-[96px]' style={{lineHeight: '100px'}}>MEGA<br/>MODEL</span>
						<small className='text-white text-4xl'>SELETIVA</small>
					</h1>
					<p className='text-lg lg:text-xl max-w-[580px]'>
						<strong>Belo Horizonte- MG</strong>, a maior agência de modelos
						e talentos do Brasil estará na sua cidade para selecionar novos talentos para integrar seu casting
						de modelos. Se você sempre sonhou em brilhar nas passarelas, campanhas publicitárias e editoriais de
						moda, esta é a sua chance!
					</p>
					<div className="w-full flex flex-row gap-4">
						<a
							href="#subscribe"
							className="py-3 px-4 uppercase bg-[#EC7D6C] rounded text-white font-poppins font-bold hover:bg-white hover:text-[#EC7D6C] hover:shadow-md cursor-pointer"
						>
							Inscreva-se
						</a>
					</div>
				</div>
			</header>
		
			<div className='bg-[#EC7D6C] w-full px-8 py-16 lg:py-32 flex items-center justify-center' id='subscribe'>
				<div className='w-[600px] max-w-full bg-gray-50 rounded-md p-8'>
					<h2 className='text-[#EC7D6C] border-b pb-4 lg:pb-8 border-[#EC7D6C]/30 text-xl lg:text-2xl xl:text-4xl text-primary mb-8 font-poppins font-bold'>
						Faça Parte!
					</h2>
					<RegisterForm/>
				</div>
			</div>
		</div>
	)
}

export default HomeSeletiva