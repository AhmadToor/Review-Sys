import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/useAuth";
import { Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
  const {passwordType,confirmPasswordType,toggleConfirmPasswordVisibility, togglePasswordVisibility} = useAuth()
  const navigate = useNavigate()
  return (
    <Card className="my-3 w-full max-w-sm border-none ">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto">
        <form className= 'grid gap-4' >
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor="firstname" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First Name</Label>
              <Input type="text" autoComplete="name"  name="firstname" id="firstname" placeholder="Firstname"  />
            </div>
            <div>
              <Label htmlFor="lastname" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last Name</Label>
              <Input type="text"  id="lastname" placeholder="Lastname"  />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              
              autoComplete="email"
              placeholder="xyz@example.com"
              
            />
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="password" type={passwordType} placeholder="Your password" autoComplete="new-password"  />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  passwordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirmpassword">Confirm Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="confirmpassword" type={confirmPasswordType} autoComplete="password"  placeholder="Confirm your password"  />
              <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  confirmPasswordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
          </div>
          
          <Button  
          type="submit"
          onClick={(e)=>{e.preventDefault(); navigate('/trypremium')}}
          className="w-full">
           
              Create your account
            
            </Button>
        </form>
      </CardContent>
    </Card>
  )
}