import { SigninSchemaTypes } from '@/types/authtypes';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:  'http://localhost:3000',
});



const loginRequest = async (values: SigninSchemaTypes) => {
    try {
        const response = await axiosInstance.post('/api/signin', values);
        return response.data; 
    } catch (error) {

        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }

        throw new Error('An unexpected error occurred');
    }
};

export { loginRequest };