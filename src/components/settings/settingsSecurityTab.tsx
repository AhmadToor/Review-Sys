import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useChangePassword } from "@/hooks/useChangePassword";


const SettingsSecurityTab = () => {
  const { handleSubmit, handleresetpassword,isLoading, register, errors, reset } = useChangePassword()
    const {passwordType,confirmPasswordType,toggleConfirmPasswordVisibility,oldPasswordType,toggleOldPasswordVisibility, togglePasswordVisibility} = useAuth()
  return (
    <div>
      <h1 className="font-bold text-sm">Change your Password</h1>
      <p className="text-gray-500 mt-1 text-xs">You can easily change your password here.</p>
      <Card className="p-3 border-none mt-4 rounded-xl relative">
       <form onSubmit={handleSubmit(handleresetpassword)} className=" mb-14">
        <CardContent className=" space-y-2 p-0">
       <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Old Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="oldpassword"    {...register('oldpassword')} type={oldPasswordType} placeholder="Your password" autoComplete="old-password"  />
              <div onClick={toggleOldPasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  oldPasswordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
            {errors.oldpasswordError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.oldpasswordError}</CardDescription>
            )}
          </div>
       <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">New Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="newpassword" {...register('newpassword')} type={passwordType} placeholder="Your password" autoComplete="new-password"  />
              <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  passwordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
            {errors.newPasswordError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.newPasswordError}</CardDescription>
            )}
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirmpassword">Confirm Password</Label>
            </div>
            <div className="flex items-baseline relative">
              <Input id="confirmpassword" type={confirmPasswordType} {...register('confirmPassword')} autoComplete="password"  placeholder="Confirm your password"  />
              <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer absolute right-2.5 top-[9px]">
              {
                  confirmPasswordType === 'text'? <EyeClosed/> : <Eye/>
                }
              </div>
            </div>
            {errors.confirmPasswordError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.confirmPasswordError}</CardDescription>
            )}
            {errors.serverError && (
              <CardDescription  className="ml-2 my-0 text-destructive">{errors.serverError}</CardDescription>
            )}
          </div>
        </CardContent>
        <CardFooter >
          <div className="mt-2 flex gap-2 justify-end absolute bottom-3 right-3 flex-col left-3">
            <hr />
            <div className="justify-end flex gap-2">
              <Button variant='outline' onClick={() => { reset() }} className="border-none bg-gray-200 hover:text-black text-sm">Cancel</Button>
              <Button type="submit" className="bg-primary text-sm">{isLoading? <Loader2 className="animate-spin"/> : 'Save '}</Button>
            </div>
          </div>
        </CardFooter>
       </form>
      </Card>
    </div>
  )
};

export default SettingsSecurityTab;
