import { signupschema } from "@/schema/authSchema"
import { signupRequest } from "@/services/authServices"
import { SignupSchemaTypes } from "@/types/authtypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const useSignUp = ()=>{
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationKey: ["signup"],
        mutationFn : async (values : SignupSchemaTypes)=>{
            const response = await  signupRequest(values);
       
        return response
},
        onSuccess : (data)=>{
            const {token , ...rest} = data
            localStorage.setItem('accessToken' , JSON.stringify(token))
            localStorage.setItem('userinfo' , JSON.stringify(rest))
            navigate('/trypremium') 
        }
})
    const {handleSubmit, register, formState} = useForm<SignupSchemaTypes>({
        mode: 'onSubmit',
        resolver: zodResolver(signupschema)
    })
    const handleSignup: SubmitHandler<SignupSchemaTypes> = (values)=>{
        mutation.mutate(values)
        
        
    }
    const errors = {
     'nameError' : formState.errors.firstname?.message,
     'emailError' : formState.errors.email?.message,
     'passwordError' : formState.errors.password?.message,
     'matchError' : formState.errors.confirmpassword?.message,
     'serverError' : mutation.error?.message
    }

   
    return {
        handleSubmit,
         register,
         handleSignup,
         errors,
         isLoading : mutation.isPending
        }
}