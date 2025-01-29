export interface FormData {
	name: string
	email: string
	mobile_phone: string
	city_id: string
	state_id: string
	gender_id: number
	birthdate: string | null
	responsible_name: string
	site_id: string | number | null
	browser: string
	browser_version: string
	platform: string
	platform_version: string
	ip: string
	user_agent: string
	referrer: string
	utm_source: string
	utm_medium: string
	utm_campaign: string
	utm_term: string
	utm_content: string
	fbclid: string
}

export type City = {
	value: string
	name: string
}

export type State = {
	value: string
	name: string
}

export type Item  = {
    [key: string|number]: string
}