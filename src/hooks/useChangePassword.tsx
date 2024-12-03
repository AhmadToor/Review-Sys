import { resetPasswordSchema } from "@/schema/authSchema"
import { ResetPasswordSchemaTypes } from "@/types/authtypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const useChangePassword = ()=>{
    const navigate =  useNavigate()
    const mutation = useMutation({
        mutationKey : ['reset-password'],
        mutationFn : async (values : ResetPasswordSchemaTypes)=>{
            const response = await fetch('http://localhost:3000/api/resetpassword', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(values)
            })
            if (!response.ok){
                const errorData = await response.json()
                throw new Error(errorData.message || 'Server Error'); 
            }
            return response
        },
        onSuccess : ()=>{
            //handle success
            
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
        mutation.mutate(values)
        
        
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