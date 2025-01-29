import axios from 'axios';
import { FormData } from '../types/form';

const responseConfig = {
    headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_V3_API_TOKEN
    }
};

export const registerLead = async (values: FormData) => {

	try {
        const registerUrl = process.env.REACT_APP_V3_URL + '/leads/register';
        const response = await axios.post(registerUrl, values, responseConfig);
        
        if (response.status >= 200 && response.status <= 201) {
            return { status: 'success', data: response.data };
        } else {
	        return { status: 'error', data: response.data };
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }
		
        return { status: 'error', data: error };
    }
};
