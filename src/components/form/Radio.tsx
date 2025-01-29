import React from 'react'
import { Field } from 'formik';

type Props = {
	type: "radio" | "checkbox";
	name: string;
	label?: string;
	value: string | number;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = (props: Props) => {
	const inputId = Math.random() + '-' + props.name + '_' + props.value;

	const inputClass = `appearance-none bg-white text-gray-800 border-2 ${
		props.checked
			? 'border-gray-900 bg-white before:pointer-events-none before:absolute before:h-3 before:w-3 before:rounded-full before:content-[""] before:bg-gray-900 before:z-10 before:mt-1 before:ml-1'
			: 'border-gray-400'
		} rounded-full w-6 h-6 leading-tight focus:outline-none focus:border-gray-900 focus:shadow-md focus:ring-gray-200 focus:ring-4`;

	return (
		<Field htmlFor={inputId} name={props.name}>
			{({ field, form }: { field: any; form: any }) => (
				<label className="flex flex-row items-center justify-center gap-2">
					<input
						{...field}
						id={inputId}
						className={inputClass}
						checked={props.checked}
						type="radio"
						onChange={() => props.onChange && props.onChange}
					/>
					<span className="font-semibold text-black text--md">{props.label}</span>
				</label>
			)}
		</Field>
	)
}

Radio.defaultProps = {
	type: "radio",
}

export default Radio;