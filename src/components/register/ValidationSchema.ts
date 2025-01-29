import * as Yup from 'yup';
import { FormData } from '../../types/form';
import { useTranslation } from "react-i18next";

const ValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    name: Yup.string().required(t('validation.name_required')).min(6, t('validation.name_minlength')),
    email: Yup.string().required(t('validation.email_required')).email(t('validation.email_invalid')),
    mobile_phone: Yup.string().required(t('validation.phone_required')).matches(/^\(\d{2}\) \d{5}-\d{3,4}$/, t('validation.phone_invalid')),
    city_id: Yup.string().required(t('validation.city_required')),
    state_id: Yup.string().required(t('validation.state_required')),
    gender_id: Yup.number().required(t('validation.gender_required')),
    birthdate: Yup.string().nullable().notRequired(),
    responsible_name: Yup.string().nullable().notRequired(),
    site_id: Yup.mixed().oneOf([Yup.string(), Yup.number()]).nullable().notRequired(),
    browser: Yup.string().notRequired(),
    browser_version: Yup.string().notRequired(),
    platform: Yup.string().notRequired(),
    platform_version: Yup.string().notRequired(),
    ip: Yup.string().notRequired(),
    referrer: Yup.string().notRequired(),
    mobile: Yup.string().nullable().notRequired(),
    utm_source: Yup.string().notRequired(),
    utm_medium: Yup.string().notRequired(),
    utm_campaign: Yup.string().notRequired(),
    utm_term: Yup.string().notRequired(),
    utm_content: Yup.string().notRequired(),
    fbclid: Yup.string().notRequired(),
  })
}

export default ValidationSchema