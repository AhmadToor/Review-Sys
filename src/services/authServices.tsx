import { ResetPasswordSchemaTypes, SigninSchemaTypes, SignupSchemaTypes } from '@/types/authtypes';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:  'http://localhost:3000',
});



const loginRequest = async (values: SigninSchemaTypes) => {
    try {
        const response = await axiosInstance.post('/api/users/login', values);
        return response.data; 
    } catch (error) {

        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }

        throw new Error('An unexpected error occurred');
    }
};
const signupRequest = async (values: SignupSchemaTypes) => {
    try {
        const response = await axiosInstance.post('/api/users/register', values);
        return response.data; 
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }

        throw new Error('An unexpected error occurred');
    }
};
const linkGoogleBuisnessAccountRequest  = async () => {
    try {
        const response = await axiosInstance.post('/api/attachbuisness');
        return response.data; 
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }

        throw new Error('An unexpected error occurred');
    }
};

const resetPasswordRequest = async (values: ResetPasswordSchemaTypes)=>{
    try {
        const response = await axiosInstance.post('/api/users/resetpassword', values)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }

        throw new Error('An unexpected error occurred');
    }
}

export { loginRequest , resetPasswordRequest, signupRequest, linkGoogleBuisnessAccountRequest};