import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Badge } from "../ui/badge";
import { useState } from "react";


const SettingsNotificationTab = () => {
  const [keywords, setKeywords] = useState<string>("");
  const [keywordList, setKeywordList] = useState<string[]>(["Bad"]);
  const [customAlerts, setCustomAlerts] = useState<string[]>(["5.0", "3.0"]);
  const [customSentiments, setCustomSentiments] = useState<string[]>(["Happy", "Angry"]);

  const handleCustomSentiments = (value: string)=>{
    if (customSentiments.includes(value)){
      setCustomSentiments(customSentiments.filter((item) => item !== value))
    } else{
      setCustomSentiments([...customSentiments, value])
    }
  }
  const handleCustomAlert = (value: string)=>{
    if (customAlerts.includes(value)){
      setCustomAlerts(customAlerts.filter((item) => item !== value))
    } else{
      setCustomAlerts([...customAlerts, value])
    }
  }

  const handleAddKeyword = () => {
    if (keywords.trim() && !keywordList.includes(keywords.trim())) {
      setKeywordList([...keywordList, keywords.trim()]);
      setKeywords("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setKeywordList(keywordList.filter(k => k !== keyword));
  };
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
                value={keywords}
                onChange={(e)=>{
                  setKeywords(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddKeyword();
                  }
                }}
                className="my-2 mt-3 bg-gray-50"
/>
                <div className="p-2 border-[1px] rounded-xl border-gray-100" >
        <p className="text-[10px] text-gray-500 ">Added Keywords</p>
                <div className="  py-2">
                {keywordList.map((keyword, index) => (
            <Badge key={index} className="border-none mr-2 cursor-pointer mb-2 bg-dashboardButton p-2 text-xs text-black">
              {keyword} <X className="stroke-red-600 ml-1 w-4 h-4" onClick={() => handleRemoveKeyword(keyword)} />
            </Badge>
          ))}
                </div>
                </div>
            </CardContent>
            <CardContent className="p-0 mt-3">
        <h1 className="font-bold text-sm">Set Custom Alerts</h1>
        <p className="text-xs text-gray-500 mt-1">Set up custom alerts for specific keywords, star ratings, review types, or review sentiments.</p>
              <div className="my-2">
              <Button variant='outline' onClick={()=>{handleCustomAlert("5.0")}} className={`border-none mr-2 mb-2   text-sm font-semibold  ${customAlerts.includes("5.0")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                   5.0
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomAlert("4.0")}} className={`border-none mr-2 mb-2   text-sm font-semibold  ${customAlerts.includes("4.0")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                  4.0
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomAlert("3.0")}} className={`border-none mr-2 mb-2   text-sm font-semibold  ${customAlerts.includes("3.0")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                  3.0
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomAlert("2.0")}} className={`border-none mr-2 mb-2   text-sm font-semibold  ${customAlerts.includes("2.0")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                   2.0
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomAlert("1.0")}} className={`border-none mr-2 mb-2  text-sm font-semibold  ${customAlerts.includes("1.0")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                   1.0
                </Button>
              </div>
            </CardContent>
            <CardContent className="p-0 mt-3">
        <h1 className="font-bold text-sm">Review Sentiment</h1>
        <p className="text-xs text-gray-500 mt-1">Select all the sentiments that you want to receive alerts for</p>
              <div className="my-2">
              <Button variant='outline' onClick={()=>{handleCustomSentiments("Happy")}} className={`border-none mr-2 mb-2   text-xs font-semibold  ${customSentiments.includes("Happy")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                   Happy
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomSentiments("Sad")}} className={`border-none mr-2 mb-2   text-xs font-semibold  ${customSentiments.includes("Sad")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                  Sad
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomSentiments("Satisfied")}} className={`border-none mr-2 mb-2   text-xs font-semibold  ${customSentiments.includes("Satisfied")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                  Satisfied
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomSentiments("Angry")}} className={`border-none mr-2 mb-2   text-xs font-semibold  ${customSentiments.includes("Angry")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                  Angry
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomSentiments("Un-Satisfied")}} className={`border-none mr-2 mb-2   text-xs font-semibold  ${customSentiments.includes("Un-Satisfied")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
                   Un-Satisfied
                </Button>
                <Button variant='outline' onClick={()=>{handleCustomSentiments("Neutral")}} className={`border-none mr-2 mb-2   text-xs font-semibold  ${customSentiments.includes("Neutral")? "bg-primary text-white hover:bg-primary hover:text-white" : "hover:bg-dashboardButton bg-dashboardButton text-black"}`}>
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
