import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import States from '../data/states.json';
import List from '../data/list.json';
import InputText from '../components/form/InputText';
import SelectDropdown from '../components/form/SelectDropdown';
import Button from '../components/form/Button';
import FormStatus from '../components/form/FormStatus';
import { useTranslation } from "react-i18next";
import { browserName, getUA, browserVersion, osName, osVersion } from 'react-device-detect';
import { FormData, City, State, Item } from '../types/form';
import { getUserData } from '../stores/userDataStore';
import { registerLead } from '../stores/LeadRegisterStore';
import axios from 'axios';

const Cities: {[key: string]: City[]} = require('../data/cities.json');

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
}

const RegisterForm: React.FC = () => {
	const [selectedState, setSelectedState] = useState<{ value: string; label: string } | null>(null)
	const [selectedCity, setSelectedCity] = useState<{ value: string; label: string } | null>(null)
	const [selectedGender, setSelectedGender] = useState<{ value: string; label: string } | null>(null)
	const [userAge, setUserAge] = useState(20)
	const [formStatus, setFormStatus] = useState('idle')
	const [userData, setUserData] = useState<{ip: string, user_agent: string}>({ ip: '', user_agent: '' });
	const { t } = useTranslation()
	const navigate = useNavigate()
	const list: {[key: string]: Item} = List

	const [utmSource, utmMedium, utmCampaign, utmTerm, utmContent, queryStateId, queryCityId, queryGenderId, fbclid] = [
		useQuery().get('utm_source'),
		useQuery().get('utm_medium'),
		useQuery().get('utm_campaign'),
		useQuery().get('utm_term'),
		useQuery().get('utm_content'),
		useQuery().get('state_id'),
		useQuery().get('city_id'),
		useQuery().get('gender_id'),
		useQuery().get('fbclid'),
	];

	const getCitiesForState = (stateValue: string): City[] => {
		return Cities[stateValue] || [];
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required(t('validation.name_required')).min(6, t('validation.name_minlength')),
		email: Yup.string().required(t('validation.email_required')).email(t('validation.email_invalid')),
		mobile_phone: Yup.string().required(t('validation.phone_required')).matches(/^\(\d{2}\) \d{5}-\d{3,4}$/, t('validation.phone_invalid')),
		state_id: Yup.string().required(t('validation.state_required')),
		city_id: Yup.string().required(t('validation.city_required')),
		gender_id: Yup.string().required(t('validation.gender_required')),
		birthdate: process.env.REACT_APP_PAGE_TYPE === 'kids' ? Yup.string().required(t('validation.birthdate_required')) : Yup.string().notRequired(),
	});

	const genderOptions = Object.keys(list['genders']).map(id => ({
		value: id,
		label: list['genders'][id]
	}));

	const handleSubmit = async (values: FormData, { setSubmitting }: FormikHelpers<FormData>) => {
		setFormStatus('is_submiting');
		const result = await registerLead(values);
		
		if (result.status === 'success') {
			setFormStatus('success');
			navigate('/obrigado');
		} else {
			setFormStatus('error');
		}
		
		setSubmitting(false);
	};

	const handleDateChange = (dateString: string) => {

		if (dateString.length < 10) {
			return false;
		}

		let split: Array<string | number> = dateString.split('/');
		let date = new Date(Number(split[2]), Number(split[1]) - 1, Number(split[0]));
		let today = new Date();
		let age = today.getFullYear() - date.getFullYear();
		let m = today.getMonth() - date.getMonth();
		
		if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
			age--;
		}
		
		setUserAge(age);
	}

	useEffect(() => {
		if (queryStateId)
		{
			const state = States.find((state: State) => state.value === queryStateId);
			if (state) {
			  setSelectedState({ value: state.value, label: state.name });
			}
		}

		if (queryCityId && queryStateId) {
		  const city = getCitiesForState(queryStateId).find((city: City) => city.value === queryCityId);
		  if (city) {
			setSelectedCity({ value: city.value, label: city.name });
		  }
		}

		if (queryGenderId) {
			const genderOption = Object.keys(list['genders']).map(id => ({
			  value: id,
			  label: list['genders'][id]
			})).find(gender => gender.value === queryGenderId);
			
			if (genderOption) {
			  setSelectedGender(genderOption);
			}
		}
	}, [queryStateId, queryCityId, queryGenderId]);

	const [initialValues, setInitialValues] =  useState<FormData>({
		name: '',
		email: '',
		mobile_phone: '',
		city_id: queryCityId ?? '',
		state_id: queryStateId ?? '',
		gender_id: queryGenderId ? parseInt(queryGenderId) : 20,
		birthdate: '',
		responsible_name: '',
		site_id: process.env.REACT_APP_V3_SITE_ID ?? null,
		browser: browserName,
		browser_version: browserVersion,
		platform: osName,
		platform_version: osVersion,
		ip: '',
		user_agent: getUA,
		referrer: document.referrer,
		utm_source: utmSource ?? '',
		utm_medium: utmMedium ?? '',
		utm_campaign: utmCampaign ?? '',
		utm_term: utmTerm ?? '',
		utm_content: utmContent ?? '',
		fbclid: fbclid ?? '',
	});

	useEffect(() => {
		async function fetchData() {
			const userData = await getUserData();
			setUserData(userData);
			setInitialValues(initialValues => ({
				...initialValues,
				ip: userData.ip,
			}));
		}
		fetchData();
	}, []);

	return (
		<Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			{({ isSubmitting, values, errors, touched, setFieldValue }) => (
				<Form className="relative">
					{formStatus !== 'idle' && (
						<FormStatus
							title={t(`form.${formStatus}`)}
							description={t(`form.${formStatus}_description`)}
						/>
					)}

					<div>
						<InputText name="name" label={t('form.name')} />
					</div>

					<div>
						<SelectDropdown
							label={t('form.gender')}
							options={genderOptions}
							name="gender_id"
							value={selectedGender || genderOptions[initialValues.gender_id]}
							onChange={(option) => {
								setSelectedGender(option);
								setFieldValue('gender_id', option?.value);
							}}
						/>
					</div>

					<div>
						<InputText
							name="email"
							label={t('form.email')}
						/>
					</div>

					<div>
						<InputText
							name="mobile_phone"
							label={t('form.phone')}
							mask="(99) 99999-999?"
							formatChars={{ 9: '[0-9]', '?': '[-\0-9]' }}
						/>
					</div>

					<div>
						<InputText
							name="birthdate"
							label={t('form.birthdate')}
							mask="99/99/9999"
							formatChars={{ 9: '[0-9]', '?': '[-\0-9]' }}
							onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
								handleDateChange(event.target.value);
							}}
						/>
					</div>

					<div>
						<SelectDropdown
							label={t('form.state')}
							options={States.map((state: State) => ({ value: state.value, label: state.name }))}
							value={selectedState || null}
							name="state_id"
							onChange={(option) => {
								setSelectedState(option);
								setFieldValue('state_id', option?.value);
							}}
						/>
					</div>

					<div>
						{selectedState ? (
							<>
								<SelectDropdown
									label={t('form.city')}
									options={getCitiesForState(selectedState.value).map((city: City) => ({ value: city.value, label: city.name }))}
									value={selectedCity || null}
									name="city_id"
									blankOption={true}
									onChange={(option) => {
										setSelectedCity(option);
										setFieldValue('city_id', option?.value);
									}}
									disabled={!selectedState}
								/>
							</>
						) : (
							<>
								<InputText
									name="city_id_mask"
									label={t('form.city')}
									placeholder={t('form.choose_state_before')}
									disabled={true}
								/>
							</>
						)}
					</div>

					{userAge < 18 && userAge > 0 && (
						<div>
							<InputText
								name="responsible_name"
								label={t('form.responsible_name')}
							/>
							<div className="bg-gray-50 p-2 rounded-md text-xs text-slate-600 font-semibold -mt-2 mb-4">
								{t('form.responsible_name_helper')}
							</div>
						</div>
					)}

					<div>
						<Button>{t('form.submit')}</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default RegisterForm;