import { Eye, EyeClosed } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useAuth } from "@/hooks/useAuth";


const SigninForm = () => {
  const {passwordType, togglePasswordVisibility} = useAuth()
  return (
    
      <Card className="my-4 w-full max-w-sm  border-none">
      <CardContent className="pt-6 max-w-md max-h-md mx-auto ">
        <form className="grid gap-4" >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              autoComplete="email"
              placeholder="xyz@example.com"
              className="rounded-sm"
            />
            
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>

            <div className="flex items-baseline relative">
              <Input id="password" className="rounded-sm" type={passwordType}  autoComplete="current-password" placeholder="Your password" />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
                {
                  passwordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
           
          </div>

          <Button type="submit" className="w-full ">
            
          Login 
          </Button>
        </form>
        
      </CardContent>
    </Card>
  )
};

export default SigninForm;
