import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';
import ArrowDown from "../assets/images/arrow-down.svg";
import BannerDiversity from "./BannerDiversity";

const HomeMega = () => {
	const { t } = useTranslation();

    return (
        <div className='w-full lg:grid lg:grid-cols-2 bg-gray-800'>
            <div className="h-full">
	            <BannerDiversity />
            </div>
            <div className="max-lg:py-8 w-full flex flex-col p-4 md:p-8 lg:p-16 gap-2 lg:gap-4 items-center justify-center bg-gray-200 lg:pt-28" id="subscribe">
                <h2 className="mb-4 text-5xl text-center w-full font-poppins font-bold text-black">{ t('subscribe') }</h2>
                <div className="bg-white rounded p-8 w-full md:shadow-lg">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default HomeMega