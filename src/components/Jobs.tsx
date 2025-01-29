import React from 'react'
import Job1 from '../assets/images/jobs/job-01.webp'
import Job2 from '../assets/images/jobs/job-02.webp'
import Job3 from '../assets/images/jobs/job-03.webp'
import CheckIcon from '../assets/images/check.svg'

const Jobs = () => {

    const pageType = process.env.REACT_APP_PAGE_TYPE ?? 'mega';

    const jobs: Record<string, [...string[]]> = {
        'diversity': [Job1, Job2, Job3],
        'mega': [Job1, Job2, Job3],
    }

    const features: string[] = [
        'Avaliação de perfil gratuíta.',
        'Agência Líder no ramo da Diversidade.',
        'Conexões com grandes marcas e oportunidades de trabalho.',
        'Equipe experiente e suporte contínuo.',
    ]

    return (
        <div className="w-full text-white bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden max-lg:p-8 max-lg:text-center">
            <div className="flex items-center justify-center flex-col gap-4 lg:gap-8">
                <div className="w-full grid lg:grid-cols-2 lg:py-16 items-center">
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl lg:pl-16 xl:pl-32">Por que escolher a<br/><strong className="uppercase">{process.env.REACT_APP_NAME}?</strong></h2>
                    <div className="h-2 w-full bg-white max-lg:hidden"></div>
                </div>

                <div className="w-full lg:mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:px-16 xl:px-32" id="features">
                        { features.map((feature, index) => (
                            <div key={index} className="flex items-center lg:items-start flex-col lg:flex-row justify-center gap-2 lg:gap-4 max-lg:bg-white max-lg:p-4 max-lg:rounded max-lg:bg-opacity-10">
                                <img className="h-12 w-12 object-contain" src={CheckIcon} alt="Por que escolher a Agência" />
                                <p className="text-xl lg:text-lg xl:text-xl">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full grid md:grid-cols-3 gap-2 lg:gap-4 xl:gap-6 lg:px-4 xl:px-6 max-md:mt-24 max-md:rotate-6">
                    {Object.keys(jobs[pageType]).map((image, index) => (
                        <img
                            key={index}
                            src={jobs[pageType][index]}
                            alt="Por que escolher a Agência"
                            className={`w-full object-cover object-top border-8 lg:border-16 border-white shadow-lg lg:shadow-xl max-md:-mt-12 ` + (process.env.REACT_APP_PAGE_TYPE === 'mega' ? 'grayscale contrast-150 ' : ' ') + (index % 2 === 0 ? 'max-md:rotate-3 max-md:-ml-8' : 'max-md:-rotate-3')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Jobs