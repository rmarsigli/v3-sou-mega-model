import React from 'react'

type Props = {
	children: React.ReactNode;
	htmlFor?: string;
}

const Label = (props: Props) => {
	return (
		<label
			htmlFor={props.htmlFor}
			className="block text-gray-700 text-sm font-bold mb-2"
		>
			{props.children}
		</label>
	)
}

export default Label