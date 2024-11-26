import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useSignIn } from "@/hooks/useSignIn";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";


const SigninForm = () => {
  const {passwordType, togglePasswordVisibility} = useAuth()
  const { handlelogin, handleSubmit, register, emailError,loginError, passwordError, isLoading } = useSignIn();
  const { toast } = useToast(); 
  console.log(loginError);
  
  useEffect(() => {
    if (loginError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: loginError,
      });
    }
  }, [toast, loginError]);
  return (
    
      <Card className="my-4 w-full max-w-sm  border-none">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto ">
        <form className="grid gap-4" onSubmit={handleSubmit(handlelogin)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              autoComplete="email"
              {...register('email')}
              placeholder="xyz@example.com"
              className={emailError ? 'border-red-500 border-[1px]' : ''}
            />
            {emailError && (
              <CardDescription className="ml-2 text-destructive">{emailError}</CardDescription>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>

            <div className="flex items-baseline relative">
              <Input id="password" className={passwordError ? 'border-red-500 border-[1px]' : ''} {...register('password')} type={passwordType}  autoComplete="current-password" placeholder="Your password" />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
                {
                  passwordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
            {passwordError && (
              <CardDescription className="text-destructive ml-2">{passwordError}</CardDescription>
            )}
          </div>

          <Button type="submit" className="w-full ">
            
          {isLoading ?
              <Loader2 className="animate-spin" />
              : 'Login'}
          </Button>
        </form>
        
      </CardContent>
    </Card>
  )
};

export default SigninForm;
