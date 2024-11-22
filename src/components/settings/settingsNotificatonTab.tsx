import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";


const SettingsNotificationTab = () => {
  return (
    <div className="grid gap-4 grid-cols-[3fr_2fr] mt-4">
      <div className="1">
      <div>
        <h1 className="font-bold text-sm">Custom Alerts</h1>
        <p className="text-xs text-gray-500 mt-1">Set up custom alerts for specific keywords, star ratings, review types, or review sentiments.</p>
        <Card className="px-5 py-3 my-4 bg-white border-none rounded-xl">
        <CardContent className="p-0">
            <div className="flex w-full justify-between"><p className="text-sm">Push Notifications</p> <Switch/></div>
            <hr className="my-2" />
            <div className="flex w-full justify-between"><p className="text-sm">Email Notifications</p> <Switch defaultChecked={true} /></div>

        </CardContent>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-sm">System Notifications</h1>
        <p className="text-xs text-gray-500 mt-1">Manage alerts for important system updates and activities.</p>
        <Card className="px-5 py-3 my-4 bg-white border-none rounded-xl">
        <CardContent className="p-0">
            <div className="flex w-full justify-between"><p className="text-sm">Push Notifications</p> <Switch/></div>
            <hr className="my-2" />
            <div className="flex w-full justify-between"><p className="text-sm">Email Notifications</p> <Switch defaultChecked={true} /></div>

        </CardContent>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-sm">Sentiment Changes</h1>
        <p className="text-xs text-gray-500 mt-1">Stay updated about the sentiment change taking place.</p>
        <Card className="px-5 py-3 my-4 bg-white border-none rounded-xl">
        <CardContent className="p-0">
            <div className="flex w-full justify-between"><p className="text-sm">Push Notifications</p> <Switch/></div>
            <hr className="my-2" />
            <div className="flex w-full justify-between"><p className="text-sm">Email Notifications</p> <Switch defaultChecked={true} /></div>

        </CardContent>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-sm">Reviews Alerts</h1>
        <p className="text-xs text-gray-500 mt-1">Receive the alerts whenever a review is posted on your profile.</p>
        <Card className="px-5 py-3 my-4 bg-white border-none rounded-xl">
        <CardContent className="p-0">
            <div className="flex w-full justify-between"><p className="text-sm">Push Notifications</p> <Switch/></div>
            <hr className="my-2" />
            <div className="flex w-full justify-between"><p className="text-sm">Email Notifications</p> <Switch defaultChecked={true} /></div>

        </CardContent>
        </Card>
      </div>
      </div>

      <div className="2">
        <h1 className="font-bold text-sm">Set Custom Alerts</h1>
        <p className="text-xs text-gray-500 mt-1">Set up custom alerts for specific keywords, star ratings, review types, or review sentiments.</p>
        <Card className="border-none mt-4 bg-white rounded-xl p-3">
            <CardHeader className="p-0">
        <h1 className="font-bold text-sm">Keywords</h1>
        <p className="text-xs text-gray-500 mt-1">If these keywords are mentioned in the review then you will receive notifications.</p>
                
            </CardHeader>
            <CardContent className="p-0">
                <Input
                name="keywords"
                placeholder="Add Keywords..."
                className="my-2 mt-3 bg-gray-50"
                />
                <div className="p-2 border-[1px] rounded-xl border-gray-100" >
        <p className="text-[10px] text-gray-500 ">Recommended Keywords</p>
                <div className="  py-2">
                <Button variant='outline' className="border-none mr-2 mb-2  bg-dashboardButton  text-xs text-black">
                   Best Cuisine <X className="stroke-red-600"/> 
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs text-black">
                   Best Cuisine <X className="stroke-red-600"/> 
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs text-black">
                   Best Cuisine <X className="stroke-red-600"/> 
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs text-black">
                   Best Cuisine <X className="stroke-red-600"/> 
                </Button>
                </div>
                </div>
            </CardContent>
            <CardContent className="p-0 mt-3">
        <h1 className="font-bold text-sm">Set Custom Alerts</h1>
        <p className="text-xs text-gray-500 mt-1">Set up custom alerts for specific keywords, star ratings, review types, or review sentiments.</p>
              <div className="my-2">
              <Button variant='outline' className="border-none mr-2 mb-2 bg-primary  text-sm font-semibold text-white">
                   5.0
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-sm font-semibold text-black">
                  4.0
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-sm font-semibold text-black">
                  3.0
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-primary  text-sm font-semibold text-white">
                   2.0
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-sm font-semibold text-black">
                   1.0
                </Button>
              </div>
            </CardContent>
            <CardContent className="p-0 mt-3">
        <h1 className="font-bold text-sm">Review Sentiment</h1>
        <p className="text-xs text-gray-500 mt-1">Select all the sentiments that you want to receive alerts for</p>
              <div className="my-2">
              <Button variant='outline' className="border-none mr-2 mb-2 bg-primary  text-xs font-semibold text-white">
                   Happy
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs font-semibold text-black">
                  Sad
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs font-semibold text-black">
                  Satisfied
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-primary  text-xs font-semibold text-white">
                  Angry
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs font-semibold text-black">
                   Un-Satisfied
                </Button>
                <Button variant='outline' className="border-none mr-2 mb-2 bg-dashboardButton  text-xs font-semibold text-black">
                   Neutral
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-0">
            <Button className="w-full">
                Set Alerts
            </Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  )
};

export default SettingsNotificationTab;
