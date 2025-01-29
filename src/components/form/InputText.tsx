import React from 'react'
import { Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import Label from './Label';

type Props = {
	label?: string;
	name: string;
	type?: string;
	placeholder?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	mask?: string;
	formatChars?: {[key: string|number]: any};
	disabled?: boolean;
}

const InputText = (props: Props) => {
	const randId = Math.random() + '-';

	const renderLabel = props.label ? (
		<Label htmlFor={randId + props.name}>
			{props.label}
		</Label>
	) : null;

	const renderInput = ({field, form}: {field: any, form: any}) => {
		const inputClass = `appearance-none block w-full bg-white text-gray-700 border ${
			form.errors[props.name] && form.touched[props.name]
				? 'border-red-500'
				: 'border-gray-300'
			} rounded p-2 lg:p-3 leading-tight focus:outline-blue-500`;

		const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}
		};
		
		if (props.mask) {
			return (
				<InputMask
					{...field}
					mask={props.mask}
					className={inputClass}
					formatChars={props.formatChars}
					id={randId + props.name}
					onBlur={handleBlur}
				/>
			);
		} else {
			return (
				<>
					<input
						{...field}
						type={props.type}
						placeholder={props.placeholder}
						className={inputClass}
						id={randId + props.name}
						onBlur={handleBlur}
						disabled={props.disabled}
					/>
				</>
			);	
		}
	};

 	return (
		<div className="w-full mb-4">
			{renderLabel}
			<Field name={props.name}>
			{({ field, form }: { field: any; form: any }) => (
				<div>
					{renderInput({field, form})}
					<ErrorMessage name={props.name} component="div" className="text-red-500 text-sm font-semibold" />
				</div>
			)}
			</Field>
		</div>
	)
}

InputText.defaultProps = {
	type: "text",
	disabled: false,
}

export default InputText;