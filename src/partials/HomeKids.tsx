import RegisterForm from './RegisterForm';
import MegaKidsLogo from "../assets/images/mega-kids-logo-white.png";
import MegaKidsBg from "../assets/images/mega-kids-bg.png";
import MegaKidsText from "../assets/images/mega-kids-text.png";
import { useTranslation } from 'react-i18next';

const HomeKids = () => {
	const { t } = useTranslation();

    return (
        <div
            className='w-full p-8 lg:p-16 xl:p-32 lg:grid lg:grid-cols-2 bg-orange-600'
            style={{ backgroundImage: `url(${MegaKidsBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            <div className="h-full">
                <div className='text-white flex flex-col items-center lg:items-center justify-start gap-8 lg:gap-16 p-8 lg:p-16 w-full h-full'>
                    <img
                        src={MegaKidsText}
                        alt='Agencie seu filho na melhor agência de Talentos infantis'
                        className="z-10"
                    />
                    <img
                        src={MegaKidsLogo}
                        alt={process.env.REACT_APP_NAME}
                        className="w-[280px] object-fit object-top z-10"
                    />
                </div>
            </div>

            <div className="max-lg:py-8 w-full flex flex-col p-4 lg:p-8 gap-2 lg:gap-4 items-center justify-center bg-white rounded shadow-lg" id="subscribe">
                <h2 className="mb-4 text-5xl text-center w-full font-poppins font-bold text-orange-600">{ t('subscribe') }!</h2>
                <div className="w-full">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default HomeKids