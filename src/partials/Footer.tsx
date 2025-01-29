import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import FooterLogo from '../assets/images/logo.png';
import FooterLogoKids from '../assets/images/mega-kids-logo.png';

const Footer = () => {

	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();
	const linkBtnClass = 'border-2 border-slate-800 p-2 rounded-md hover:bg-slate-800 hover:text-orange-400 hover:underline';
	
	return (
		<footer className="w-full bg-slate-900" id="footer">
			<div className="w-full flex flex-col items-center gap-4 justify-center p-8">
				<figure className="bg-gray-50 p-4 lg:p-8 rounded-md">
					<img src={process.env.REACT_APP_PAGE_TYPE === 'kids' ? FooterLogoKids : FooterLogo} alt={process.env.REACT_APP_NAME} className="w-64 mx-auto" />
				</figure>
				<div className="flex flex-col lg:flex-row items-center gap-4 text-white text-md font-poppins">
					<Link to='/politica-de-privacidade' className={linkBtnClass} target='_blank'>{ t('privacy-policy') }</Link>
					<Link to='/termos-de-uso' className={linkBtnClass} target='_blank'>{ t('therms-of-use') }</Link>
				</div>
			</div>
			<small className="block w-full px-4 py-2 border-t-2 border-gray-900 text-white font-poppins text-center">
				{ process.env.REACT_APP_NAME } &copy; { currentYear } - { t('all-rights-reserved') }
			</small>
		</footer>
	)
}

export default Footer;