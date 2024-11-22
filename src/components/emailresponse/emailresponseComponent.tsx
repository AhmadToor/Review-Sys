import { Angry, ArrowLeft, Mail, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import EmailTextEditor from "./emailTextEditor";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "../ui/avatar";



const EmailResposeComponent = () => {
  return (
    <div className="grid pt-6 grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
      <Card className="border-none rounded-xl  relative">
        <CardHeader className="space-y-2">
            <h2 className="font-bold ">Customize Template</h2>
            <p className="text-xs text-gray-500">Respond with an email to tackle this review. Select your email template to proceed.</p>
            <hr />
            <div className="flex gap-2 text-xs"><span className="text-gray-500">To:</span> <p>laoshe.found@gmail.com</p></div>
            <hr />
            
            <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p>Itnay naraz q ho bhae</p></div>
            <hr  />

        </CardHeader>
        <CardContent className="mb-10">
           <EmailTextEditor/>
        </CardContent>
        <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
            <hr className="w-full my-2"/>
            <div className="flex justify-between w-full ">
                <Button variant='outline' className="border-none bg-dashboardButton fill-primary stroke-primary hover:text-black hover:fill-black text-xs text-primary">
                  <ArrowLeft/> Go Back
                </Button>
                
                <Button >
                   <Mail/> Send Email
                </Button>
                
               
                </div>
        </CardFooter>
      </Card>
      <div>
        <Card className="border-none rounded-lg">
            <CardHeader className="p-3 pb-0">
                <h1 className="font-bold text-sm">Review</h1>
                <hr />
            </CardHeader>
            <CardContent className="p-3">
            <div className="justify-between flex flex-row items-center">
        <div className="flex gap-2 items-center">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src='https://github.com/shadcn.png' alt="Avatar" className="h-8 w-8 rounded-full" />
                    </Avatar>
    
                    <div >
                        <h2 className="text-sm font-semibold">Maoshe Found</h2>
                        <p className="text-gray-400 text-[8px]  ">Posted 1 hour ago.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <Badge className="w-fit text-xs flex items-center " ><Angry className="w-4 h-4 stroke-1.5 fill-red-400" /></Badge>
                <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4"/>  1.5</Badge>
                </div>
        </div>
        <p className="italic mt-2 text-sm ">What a pathetic service being provided. The tables were not clean and the flies were coming at us like the drones. And we were trying to save ourselves from these drone attacks in the meanwhile one of them succeeded to ruin our food at the table. It crashed into the food.</p>
            </CardContent>
        </Card>
        <h1 className="font-bold mt-4 text-sm">My Templates</h1>
        <p className="text-gray-500 my-1 text-xs">Create your templates and use them often.</p>
        <Card className="p-3 rounded-lg border-none gap-3 flex flex-col overflow-y-auto ">
            <CardContent className="bg-white rounded-lg p-3">
                <h2 className="font-bold text-sm">Itny naraz q ho bhae</h2>
                <p className="text-xs ">Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this....</p>
            </CardContent>
            <CardContent className="bg-gray-50 rounded-lg p-3">
                <h2 className="font-bold text-sm">I’ve got something for ya</h2>
                <p className="text-xs ">Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this....</p>
            </CardContent>
            <CardContent className="bg-gray-50 rounded-lg p-3">
                <h2 className="font-bold text-sm">Love the way you lie</h2>
                <p className="text-xs ">Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this....</p>
            </CardContent>
            <CardContent className="bg-gray-50 rounded-lg p-3">
                <h2 className="font-bold text-sm">Buddy koi sense hai is baat ki</h2>
                <p className="text-xs ">Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this....</p>
            </CardContent>
            <CardContent className="bg-gray-50 rounded-lg p-3">
                <h2 className="font-bold text-sm">Chalo koi baat nahi</h2>
                <p className="text-xs ">Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this....</p>
            </CardContent>
        </Card>
      </div>
    </div>
  )
};

export default EmailResposeComponent;
