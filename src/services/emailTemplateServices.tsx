import { EmailTemplateType } from "@/types/dashboardtypes";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL:  'http://localhost:3000',
});

const createTemplateRequest = async (values: EmailTemplateType)=>{
    try {
        const response = await axiosInstance.post('/api/email-templates/', values)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data; 
        }
        throw new Error('An unexpected error occurred');
    }
}

export {createTemplateRequest}
