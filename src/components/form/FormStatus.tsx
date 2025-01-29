import React from 'react'

type Props = {
	type: "success" | "error" | "warning" | "info" | "default";
	title: string;
	description?: string;
}

const FormStatus = (props: Props) => {

	return (
		<div className='bg-white absolute top-0 p-8 text-center left-0 w-full h-full flex flex-col items-center justify-center gap-2 rounded z-20'>
			<h3 className="text-xl lg:text-2xl text-black font-bold uppercase">{props.title}</h3>
			{props.description && (
				<p className="text-md md:text-lg text-gray-800">{props.description}</p>
			)}
			{process.env.REACT_APP_WHATSAPP && (
				<a
					href={`https://wa.me/${process.env.REACT_APP_WHATSAPP}?text=${process.env.REACT_APP_WHATSAPP_TEXT_ERROR}`}
					className="bg-slate-800 text-white font-bold px-4 py-2 rounded-full hover:bg-orange-600 transition-all hover:text-white hover:shadow-md"
				>Fale Conosco</a>
			)}
		</div>
	)
}

FormStatus.defaultProps = {
	type: "default",
}

export default FormStatus;