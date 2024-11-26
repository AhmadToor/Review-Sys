import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useSignUp } from "@/hooks/useSignUp";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useEffect } from "react";

export function SignUpForm() {
  const {passwordType,confirmPasswordType,toggleConfirmPasswordVisibility, togglePasswordVisibility} = useAuth()
  const {handleSignup, handleSubmit, register, errors, isLoading} = useSignUp()
  const {toast} = useToast()
  useEffect(() => {
    if (errors.serverError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errors.serverError,
      });
    }
  }, [toast, errors.serverError]);
  return (
    <Card className="my-3 w-full max-w-sm border-none ">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto">
        <form className= 'grid gap-4' onSubmit={handleSubmit(handleSignup)} >
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor="firstname" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First Name</Label>
              <Input type="text" autoComplete="name" {...register('firstname')}  name="firstname" id="firstname" placeholder="Firstname"  />
            </div>
            <div>
              <Label htmlFor="lastname" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last Name</Label>
              <Input type="text" {...register('lastname')} id="lastname" placeholder="Lastname"  />
            </div>
          </div>
          {errors.nameError && (
             <CardDescription className="ml-2 text-destructive">{errors.nameError}</CardDescription>
             
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              {...register('email')}
              autoComplete="email"
              placeholder="xyz@example.com"
              
            />
          </div>
          {errors.emailError && (
             <CardDescription className="ml-2 text-destructive">{errors.emailError}</CardDescription>
             
          )}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="password" type={passwordType} {...register('password')} placeholder="Your password" autoComplete="new-password"  />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  passwordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
          </div>
          {errors.passwordError && (
             <CardDescription className="ml-2 text-destructive">{errors.passwordError}</CardDescription>
             
          )}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirmpassword">Confirm Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="confirmpassword" {...register('confirmpassword')} type={confirmPasswordType} autoComplete="password"  placeholder="Confirm your password"  />
              <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  confirmPasswordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
          </div>
          {errors.matchError && (
             <CardDescription className="ml-2 text-destructive">{errors.matchError}</CardDescription>
             
          )}
          <Button  
          type="submit"
          className="w-full">
           
           {isLoading? 
            <Loader2 className="animate-spin"/>: 
              'Create your account'
            }
            
            
            </Button>
        </form>
      </CardContent>
    </Card>
  )
}