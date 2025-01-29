import React from 'react'

type Props = {
	label?: string;
	onClick?: () => void;
	disabled?: boolean;
	type: "submit" | "button" | "reset" | undefined;
	children: React.ReactNode;
}

const Button = (props: Props) => {
	return (
		<button
			type={props.type}
			disabled={props.disabled}
			className="bg-orange-500 hover:bg-red-500 text-white uppercase font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

Button.defaultProps = {
	type: "submit",
}

export default Button;