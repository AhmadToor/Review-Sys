import { emailTemplateSchema } from "@/schema/emailTemplateSchema";
import { createTemplateRequest } from "@/services/emailTemplateServices"
import { EmailTemplateType } from "@/types/dashboardtypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useCreateEmailTemplate = ()=> {
    const { register, handleSubmit, formState } = useForm<EmailTemplateType>({
        resolver: zodResolver(emailTemplateSchema),
            mode: "onSubmit"
        })
    const navigate = useNavigate()
    const createmutation = useMutation({
        mutationKey : ['create-email-template'],
        mutationFn: async (values: EmailTemplateType) => {
            const response = await createTemplateRequest(values);
            return response;
        },
        onSuccess: () => {
            navigate('/emailTemplates')
        },
        onError: (error) => {
            return error
        }
    })

    const handleCreateEmailTemplate: SubmitHandler<EmailTemplateType> = (values)=>{
        const userToken = localStorage.getItem("accessToken") as string
        const payload: EmailTemplateType = {
            userToken : JSON.parse(userToken) ,
            subject: values.subject,
            body: values.body,
        }
        createmutation.mutate(payload)
    }

    const errors = {
        subject : formState.errors.subject?.message,
        server : createmutation.error?.message,
        body : formState.errors.body?.message
    }
return{
    handleCreateEmailTemplate,
    handleSubmit,
    register,
    errors,
    isLoading:createmutation.isPending
}
}