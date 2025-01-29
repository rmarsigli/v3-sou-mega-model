import React from 'react'

type Props = {
	children: React.ReactNode;
}

const Title = (props: Props) => {
	return (
		<h1 className="w-full text-center mb-4 text-xl md:text-3xl lg:text-4xl xl:text-6xl uppercase text-sky-800 font-bold">{props.children}</h1>
	)
}

export default Title;