// src/services/userDataService.ts
import axios from 'axios';

export const getUserData = async (): Promise<{ ip: string, user_agent: string }> => {
    try {
        const response = await axios.get('https://v3.vitrinemegamodel.com.br/api/user-data', {
            headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_V3_API_TOKEN
            }
        });

        return {
            ip: response.data.ip,
            user_agent: response.data.user_agent,
        };
    } catch (error) {
        console.error('API error:', error);
        return { ip: '', user_agent: '' };
    }
};
