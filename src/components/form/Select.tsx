import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Label from './Label';

type Props = {
	label?: string;
	name: string;
	value?: string;
	disabled?: boolean;
	options: { value: string; label: string }[];
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
	blankOption?: boolean;
	blankOptionText?: string;
};

const Select = (props: Props) => {
	return (
		<div className="mb-4">
			{props.label && (
				<Label htmlFor={props.name}>
					{props.label}
				</Label>
			)}
			
			<Field name={props.name}>
				{({ field, form }: { field: any; form: any }) => (
					<>
						<select
							{...field}
							{...props}
							className={`appearance-none block w-full bg-white text-gray-800 border-2 ${
								form.errors[props.name] && form.touched[props.name]
									? 'border-red-500'
									: 'border-gray-400'
							} rounded p-2 lg:p-3 leading-tight focus:outline-none focus:border-gray-900 focus:shadow-md`}
						>
							{props.blankOption && (
								<option value="">
									{ props.blankOptionText ?? 'Selecione uma opção' }
								</option>
							)}
							{props.options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<ErrorMessage name={props.name} component="div" className="text-red-500 text-sm font-semibold" />
					</>
				)}
			</Field>
		</div>
	);
};

Select.defaultProps = {
	blankOption: false,
};

export default Select;