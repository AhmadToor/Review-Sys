import { MoveRight, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import GoogleIcon from '@/assets/svg/GoogleIcon.svg?react'
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AddCardComponent from "./addCardComponent";
import { useState } from "react";

const UpgradeProSection = () => {
    const [isMonthlyPlan, setIsMonthlyPlan] = useState(true)
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-[4fr_5fr] mt-6 gap-6">
            

                <div >
                    <h1 className="font-bold text-sm">Subscription Plan</h1>
                    <p className="text-gray-500 text-xs mt-1">Monthly Plan, Annual Plan per Business Profile</p>
                    <Card className="lg:p-4 p-3 mt-4 border-none rounded-xl">
                        <CardContent className="p-0 flex mb-4 flex-row gap-2">
                        <div onClick={()=>{setIsMonthlyPlan(true)}} className={`border-[1px] w-full rounded-3xl p-3 lg:px-4 bg-white cursor-pointer b flex flex-col h-36 ${isMonthlyPlan && ("border-gradient")} `}>
                <div className="flex flex-col bg-dashboard1 rounded-2xl h-full items-center justify-center">
                    <h1 className="font-bold text-2xl">20$</h1>
                    <p className="text-gray-500 text-[8px] ">Per Buisness Profile</p>
                </div>
                <p className="mt-2 text-xs lg:text-sm text-center">Monthly Plan</p>
            </div>
            <div onClick={()=>{setIsMonthlyPlan(false)}} className={`border-[1px] w-full rounded-3xl p-3 px-4 bg-white cursor-pointer  flex flex-col h-36 ${!isMonthlyPlan && ("border-gradient")} `} >
                <div className="flex flex-col bg-dashboard2 rounded-2xl h-full items-center justify-center">
                    <h1 className="font-bold text-2xl">240$</h1>
                    <p className="text-gray-500 text-[8px] ">Per Buisness Profile</p>
                </div>
                <p className="mt-2 text-xs lg:text-sm text-center">Yearly Plan </p>
            </div>

                        </CardContent>
                        <CardFooter className="p-0">
                            <Button className="w-full " onClick={() => { navigate('/settings/upgrade') }}>Upgrade Now</Button>
                        </CardFooter>
                    </Card>
                </div>
            
            <div className="flex flex-col gap-6">
            <div>
                <div>
                    <h1 className="text-sm font-bold">Billing Info</h1>
                    <p className="text-gray-500 text-xs mt-2">Manage your cards here.</p>
                    <Card className="p-2 border-none mt-4 rounded-xl">
                        <CardContent className="p-3 flex flex-col gap-4">
                            <Button variant='outline' className="border-gray-100 bg-white w-full gap-0">
                                <GoogleIcon /> <span className="text-gray-500 ">Pay</span> <p className="ml-2">Visa ....0956</p>
                                <MoveRight className="stroke-primary ml-auto" /></Button>
                            <Dialog>
                                <DialogTrigger asChild>
                            <Button variant="outline" className=" w-full font-bold border-none text-xs bg-gray-100"><Plus className="stroke-primary" /> Add Another Card</Button>
                                </DialogTrigger>
                                <DialogContent className="bg-white">
                                    <AddCardComponent/>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div>
            <h1 className="text-sm font-bold">Order Summary</h1>
            <p className="text-gray-500 text-xs mt-2">Have a look at your order and confirm to checkout.</p>
            <Card className="p-2 border-none mt-4 rounded-xl">
                        <CardContent className="p-3 flex flex-col gap-4">
                            <Button variant="outline" className=" w-full justify-between  border-none text-xs bg-gray-100"><span>Total Today</span> <strong>{isMonthlyPlan? "20" : "240"} USD</strong></Button>
                           <div className="flex gap-2 mx-2">
                            <input type="checkbox" className="cursor-pointer" defaultChecked={true}/>
                            <p className="text-xs text-gray-500">After the 30-day trial period, you’ll be charged $20.00 USD/month plus applicable tax. Cancel any time.</p>
                            </div>
                            <Button className="w-full">Subscribe</Button>
                        </CardContent>
                    </Card>
            </div>
            </div>
        </div>
    )
};

export default UpgradeProSection;
