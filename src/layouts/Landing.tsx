import React from "react";
import navbarLogo from '../assets/images/navbar-logo.svg';
import Footer from "../partials/Footer";
import WhatsappLogo from "../assets/images/whatsapp.svg";

interface LandingProps {
	children: React.ReactNode;
}

const Landing = ({children}: LandingProps) => {
	return (
		<>
			{process.env.REACT_APP_PAGE_TYPE !== 'kids' && (
				<div className="absolute top-4 left-0 w-full pr-8 lg:pr-16 h-[60px] z-10 flex justify-between gap-0">
					<div className="w-full h-full bg-black flex items-center justiy-start flex-row">
						<span className="text-white font-poppins lg:text-lg ml-8 lg:ml-16">{ process.env.REACT_APP_NAME }</span>
					</div>
					<div
						className="w-40 md:w-32 -ml-1 h-full color-black"
						style={{
							backgroundImage: `url(${navbarLogo})`,
							objectFit: 'cover',
							backgroundPosition: 'right center'
						}}
					></div>
				</div>
			)}

			<main className="relative w-full">
				{children}

				{process.env.REACT_APP_WHATSAPP && (
					<a
						href={`https://wa.me/${process.env.REACT_APP_WHATSAPP}?text=${process.env.REACT_APP_WHATSAPP_TEXT}`}
						target="_blank"
						rel="noreferrer"
						className="fixed bottom-4 right-4 z-50 p-2 bg-[#25D366] shadow-md rounded-full w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] hover:rotate-12 transition-all"
					>
						<img src={WhatsappLogo} alt="Fale Conosco!" className="w-full h-full object-contain" />
					</a>
				)}
			</main>

			<Footer />
		</>
	);
}

export default Landing;