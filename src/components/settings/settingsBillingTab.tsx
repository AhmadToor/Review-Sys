import { MoveRight, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import GoogleIcon from '@/assets/svg/GoogleIcon.svg?react'
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AddCardComponent from "./addCardComponent";

const SettingsBillingTab = () => {
    const navigate = useNavigate()
  return (
    <div className="grid grid-cols-[4fr_5fr] gap-6">
      <div className="flex flex-col gap-6">
        <div>
        <h1 className="font-bold text-sm">Current Subscription</h1>
        <p className="text-gray-500 text-xs mt-1">Manage your current subscription plan here</p>
        <Card className="p-4 mt-4 border-none rounded-xl">
        <CardContent className="p-0 flex mb-4 flex-row gap-2">
            <div className="border-[1px] w-full rounded-3xl p-3 px-4 bg-dashboard1 cursor-pointer  flex flex-col h-20 justify-end   border-gradient">
                <p className="text-[10px] text-gray-500">Current Plan</p>
                <h1 className="font-semi-bold text-sm">30 Days Free Trial</h1>
            </div>
            <div className="border-[1px] w-full  rounded-3xl p-3 px-4   cursor-pointer flex flex-col h-20 justify-end">
                <p className="text-[10px] text-gray-500">Renews On</p>
                <h1 className="font-semi-bold text-sm">24 Sept, 2024</h1>
            </div>
        </CardContent>
        <CardFooter className="p-0">
            <Button variant='outline' className="w-full bg-white text-xs text-destructive">Cancel Subscription</Button>
        </CardFooter>
        </Card>
        </div>
        <div >
        <h1 className="font-bold text-sm">See Available Plans</h1>
        <p className="text-gray-500 text-xs mt-1">Monthly Plan, Annual Plan per Business Profile</p>
        <Card className="lg:p-4 p-3 mt-4 border-none rounded-xl">
        <CardContent className="p-0 flex mb-4 flex-row gap-2">
            <div className="border-[1px] w-full rounded-3xl p-3 lg:px-4 bg-white cursor-pointer border-gradient flex flex-col h-36 ">
                <div className="flex flex-col bg-dashboard1 rounded-2xl h-full items-center justify-center">
                    <h1 className="font-bold text-2xl">20$</h1>
                    <p className="text-gray-500 text-[8px] ">Per Buisness Profile</p>
                </div>
                <p className="mt-2 text-xs lg:text-sm text-center">Monthly Plan</p>
            </div>
            <div className="border-[1px] w-full rounded-3xl p-3 px-4 bg-white cursor-pointer  flex flex-col h-36 ">
                <div className="flex flex-col bg-dashboard2 rounded-2xl h-full items-center justify-center">
                    <h1 className="font-bold text-2xl">240$</h1>
                    <p className="text-gray-500 text-[8px] ">Per Buisness Profile</p>
                </div>
                <p className="mt-2 text-xs lg:text-sm text-center">Yearly Plan </p>
            </div>
           
        </CardContent>
        <CardFooter className="p-0">
            <Button className="w-full " onClick={()=>{navigate('/settings/upgrade')}}>Upgrade Now</Button>
        </CardFooter>
        </Card>
        </div>
      </div>
      <div>
        <div>
            <h2 className="text-sm font-bold">Billing Info</h2>
            <p className="text-gray-500 text-xs mt-2">Manage your cards here.</p>
            <Card className="p-0 border-none mt-4 rounded-xl">
                <CardContent className="p-3 flex flex-col gap-4">
                    <Button variant='outline' className="border-gray-100 bg-white w-full gap-0">
                        <GoogleIcon/> <span className="text-gray-500 ">Pay</span> <p className="ml-2">Visa ....0956</p>
                        <MoveRight className="stroke-primary ml-auto"/></Button>
                    <Dialog>
                        <DialogTrigger asChild>
                    <Button variant="outline" className=" w-full font-bold border-none text-xs bg-gray-100"><Plus className="stroke-primary"/> Add Another Card</Button>
                        </DialogTrigger>
                    <DialogContent className="bg-white">
                        <AddCardComponent/>
                    </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
};

export default SettingsBillingTab;
