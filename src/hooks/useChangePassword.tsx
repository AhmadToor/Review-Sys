import { resetPasswordSchema } from "@/schema/authSchema"
import { resetPasswordRequest } from "@/services/authServices"
import { ResetPasswordSchemaTypes } from "@/types/authtypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const useChangePassword = ()=>{
    const navigate =  useNavigate()
    const mutation = useMutation({
        mutationKey : ['reset-password'],
        mutationFn : async (values: ResetPasswordSchemaTypes) => {
            const response = await resetPasswordRequest(values)
            return response
        },
        onSuccess : (data)=>{
            localStorage.removeItem("accessToken")
            navigate('/signin', { state: { 'popup': data.message } })
            
        },
        onError : (err)=>{
            return err.message
        }
    })
    const {handleSubmit,register,formState, reset} = useForm<ResetPasswordSchemaTypes>({
        resolver : zodResolver(resetPasswordSchema),
        mode : 'onSubmit'
    })
    const handleresetpassword : SubmitHandler<ResetPasswordSchemaTypes> = (values)=>{
        const userToken = localStorage.getItem("accessToken") as string
        const payload = {
            "userToken" : JSON.parse(userToken),
            "oldpassword" : values.oldpassword,
            "newpassword" : values.newpassword
        }
        mutation.mutate(payload)
        
        
    }
    
    const errors = {
        'confirmPasswordError' : formState.errors.confirmPassword?.message,
        'oldpasswordError' : formState.errors.oldpassword?.message,
        'newPasswordError' : formState.errors.newpassword?.message,
        'serverError' : mutation.error?.message
       }
   
    
    

    return{
        handleSubmit,
        register,
        handleresetpassword,
        errors,
        reset,
        isLoading : mutation.isPending
    }
}