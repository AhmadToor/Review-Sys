import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import LoadingIcon from '@/assets/svg/LoadingIcon.svg?react'
import { useState } from "react";
import EmailTextEditor from "../emailresponse/emailTextEditor";

const TextArea = ()=>{
    return(
        <textarea className="flex h-[400px] w-full rounded-md border border-none bg-background px-2 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none" placeholder="Response Text Goes Here..." />
    )
}

const CreateTemplateComponent = () => {
    const navigate = useNavigate()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [ButtonDisabled, setButtonDisabled] = useState(false)
    const [responseText, setResponseTest] = useState(TextArea)
   
  
  const handleDialogTrigger = () => {
    setIsDialogOpen(true);
    setButtonDisabled(true)
    setTimeout(() => {
        setIsDialogOpen(false);
        setButtonDisabled(false)
        setResponseTest(EmailTextEditor)
    }, 3000);
};


    return (
        <div className="mt-4 grid grid-cols-[3fr_2fr] gap-3">
            <Card className="p-3 border-none rounded-xl relative ">
                <form>
                    <CardContent className="p-0 mb-20">
                        <div className="space-y-1">
                            <Label className="text-sm " htmlFor="name" >Template Name</Label>
                            <Input
                                placeholder="Template Name Goes Here...."
                                className="border-none"
                            />
                        </div>
                        <div className="space-y-1 mt-2">
                            <Label className="text-sm " htmlFor="subject" >Subject</Label>
                            <Input
                                placeholder="Subject Goes Here...."
                                className="border-none"
                            />
                        </div>
                        <div className="space-y-1 mt-2">
                            <Label className="text-sm " htmlFor="subject" >Response Text</Label>
                           {responseText}

                        </div>
                    </CardContent>
                    <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                        <hr className="w-full my-2" />
                        <div className="flex justify-between w-full ">
                            <Button variant='outline' onClick={() => { navigate('/emailtemplates') }} className="border-none bg-dashboardButton fill-primary stroke-primary hover:text-black hover:fill-black text-xs text-primary">
                                <ArrowLeft /> Go Back
                            </Button>

                            <Button type="submit" >
                                Save
                            </Button>


                        </div>
                    </CardFooter>
                </form>
            </Card>

            <Card className="p-3 border-none rounded-xl relative">
                <CardHeader className="p-0">
                    <h1 className="text-sm font-semibold">Ai Prompt</h1>
                    <hr className="my-2" />
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-xs font-semibold mt-4">Tell Ai what to do</p>
                    <textarea className=" focus:outline-none bg-gray-100 rounded-xl focus:border-none text-sm mt-3 w-full h-[150px] py-2 px-2 text-gray-800 resize-none no-scrollbar ">Hey generate an email that I can use to address the issues of the customers who are giving me bad reviews on my business. The tone should be very friendly and satisfactory. It should bring up the conversation to solve the issues that they are higlighting in the reviews. </textarea>

                </CardContent>
                <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                    <hr className="w-full my-2" />
                    <div className="flex justify-end w-full ">
                        
                        <Dialog open={isDialogOpen} >
      <DialogTrigger asChild >
      <Button onClick={handleDialogTrigger} disabled={ButtonDisabled} className="text-xs w-full">
                            Generate Response
                        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
        <LoadingIcon/>
        <h1 className="font-bold mt-6 mb-1">Generating Responses</h1>
        <p className="text-gray-500 text-sm text-center">Just hold my bear!! It can take a while to generate all the responses.</p>
      </DialogContent>
    </Dialog>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
};

export default CreateTemplateComponent;
