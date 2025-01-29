import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Label from './Label'
import Select, { InputActionMeta, SingleValue } from 'react-select'

type OptionType = {
	value: string
	label: string
};

type Props = {
	label?: string
	name: string
	value?: OptionType | null
	disabled?: boolean
	placeholder?: string
	options: OptionType[]
	onChange?: (option: SingleValue<OptionType>) => void;
	onInputChange?: (inputValue: string, { action }: InputActionMeta) => void
	onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void
	onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void
	blankOption?: boolean
	blankOptionText?: string
}

const SelectDropdown = (props: Props) => {
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
						<Select
							{...field}
							{...props}
							classNames={{
								control: (state) => {
									return 'appearance-none h-[48px] text-gray-800 leading-tight focus:outline-none focus:border-gray-900 focus:shadow-md'
								},
								container: (state) => {
									'border-gray-500 rounded'
								}
							}}
							placeholder={props.placeholder ?? 'Escolha uma opção...'}
							options={props.options}
							onChange={(option: SingleValue<{ value: string; label: string }>) => {
								if (props.onChange) {
									props.onChange(option);
								}
								form.setFieldValue(props.name, option?.value);
							}}
						/>
						<ErrorMessage name={props.name} component="div" className="text-red-500 text-sm font-semibold" />
					</>
				)}
			</Field>
		</div>
	);
};

SelectDropdown.defaultProps = {
	blankOption: false,
};

export default SelectDropdown;