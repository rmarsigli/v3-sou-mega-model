import React from "react";
import Footer from "../partials/Footer";
import FooterLogo from '../assets/images/logo.png';
import FooterLogoKids from '../assets/images/mega-kids-logo.png';
import Title from '../components/Title';

interface LandingProps {
	children: React.ReactNode;
    title?: string;
}

const Landing = ({children, title}: LandingProps) => {
	return (
		<>
            <div className='w-full py-16'>
                <div className='max-w-[1200px] container mx-auto px-4'>
                    <img
                        src={`${process.env.REACT_APP_PAGE_TYPE === 'kids' ? FooterLogoKids : FooterLogo}`}
                        alt={process.env.REACT_APP_NAME}
                        className="w-80 mx-auto mb-4 lg:mb-8"
                    />
                    {title && <Title>{title}</Title>}
                    <div className="border-2 border-slate-200 p-4 lg:p-8 rounded-md prose prose-stone lg:prose-xl">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
		</>
	);
}

export default Landing;