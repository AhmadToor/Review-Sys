import { SigninSchemaTypes } from "@/types/authtypes"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinschema } from "@/schema/authSchema"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { loginRequest } from "@/services/authServices";



export const useSignIn = ()=>{
    const { register, handleSubmit, formState } = useForm<SigninSchemaTypes>({
        resolver: zodResolver(signinschema),
        mode: "onSubmit"
    })
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationKey : ['sign-in'],
        mutationFn: async (values: SigninSchemaTypes) => {
            const response = await loginRequest(values)
            return response
            
        
        
        
    },
    onSuccess : (data)=>{
        const {token , ...rest} = data
        localStorage.setItem('accessToken' , JSON.stringify(token))
        localStorage.setItem('userinfo' , JSON.stringify(rest))
        navigate('/')
    },
    onError : (err)=>{
        return err
    }})
    const handlelogin : SubmitHandler<SigninSchemaTypes> = (values)=>{
        mutation.mutate(values)
        
    }

    
    const errors = formState.errors
    const emailError = errors.email?.message
    const passwordError = errors.password?.message
    const loginError = mutation.error?.message;
    console.log(loginError);
    
    
    return{
        handleSubmit,
        register,
        handlelogin,
        emailError,
        passwordError,
        loginError,
        isLoading : mutation.isPending
    }
}