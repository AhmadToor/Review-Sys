import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import GoogleIcon from '@/assets/svg/GoogleIcon.svg?react'


const SettingsSwitchBuisnessTab = () => {
  return (
    <div className="px-2">
      <h1 className="text-sm font-semibold">Your Buisness Profiles</h1>
      <p className="text-gray-500 mt-1 text-xs">You can easily switch your profiles here.</p>
      <div className="grid grid-cols-[5fr_3fr]">
      <Card className="p-3 rounded-xl gap-3 flex flex-col border-none">
        <CardContent className="py-2 cursor-pointer px-2  bg-white flex rounded-lg  gap-4">
            <Avatar className=" cursor-pointer rounded-lg h-20 w-20">
                <AvatarImage src='https://github.com/shadcn.png' alt="Avatar" />
            </Avatar>
            <div className="h-20 justify-between flex flex-col">
                <h1 className="font-bold">Alica Koch</h1>
                <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm">outis.burada.01@gmail.com</p>
                <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
                </div>
            </div>
        </CardContent>
        <CardContent className="py-2 cursor-pointer px-2  bg-gray-100 rounded-lg flex  gap-4">
            <Avatar className=" cursor-pointer rounded-lg h-20 w-20">
                <AvatarImage src='https://github.com/shadcn.png' alt="Avatar" />
            </Avatar>
            <div className="h-20 justify-between flex flex-col">
                <h1 className="font-bold">Sanji Singh</h1>
                <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm">outis.burada.01@gmail.com</p>
                <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
                </div>
            </div>
        </CardContent>
        <CardFooter className="p-0 mt-2">
            <Button className="w-full "><GoogleIcon/> Link with new Google Buisness</Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  )
};

export default SettingsSwitchBuisnessTab;
