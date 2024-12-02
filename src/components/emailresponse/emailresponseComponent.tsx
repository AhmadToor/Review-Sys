import { Angry, ArrowLeft, Mail, Smile, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import EmailTextEditor from "./emailTextEditor";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate, useParams } from "react-router-dom";
import { reviews } from "@/data/unRepliedReviews";
import { emailtemplates } from "@/data/emailTemplatesData";
import { useState } from "react";



const EmailResposeComponent = () => {
    const { reviewId } = useParams()
    const selectedReview = reviews.find(review => review.id === reviewId)
    const [selectedEmailTemplate, setSelectedEmailTemplate] = useState(emailtemplates[0])
    const navigate = useNavigate()
    return (
        <div className="grid pt-6 grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
            <Card className="border-none rounded-xl  relative">
                <CardHeader className="space-y-2">
                    <h2 className="font-bold ">Customize Template</h2>
                    <p className="text-xs text-gray-500">Respond with an email to tackle this review. Select your email template to proceed.</p>
                    <hr />
                    <div className="flex gap-2 text-xs"><span className="text-gray-500">To:</span> <p>{selectedReview?.email}</p></div>
                    <hr />

                    <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p>{selectedEmailTemplate.subject}</p></div>
                    <hr />

                </CardHeader>
                <CardContent className="mb-16">
                    <EmailTextEditor>
                        {selectedEmailTemplate.body}
                    </EmailTextEditor>
                    
                </CardContent>
                <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                    <hr className="w-full my-2" />
                    <div className="flex justify-between w-full ">
                        <Button variant='outline' onClick={() => { navigate('/dashboard') }} className="border-none bg-dashboardButton fill-primary stroke-primary hover:text-black hover:fill-black text-xs text-primary">
                            <ArrowLeft /> Go Back
                        </Button>

                        <Button >
                            <Mail /> Send Email
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
                                    <AvatarImage src={selectedReview?.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                                </Avatar>

                                <div >
                                    <h2 className="text-sm font-semibold">{selectedReview?.fullname}</h2>
                                    <p className="text-gray-400 text-[8px]  ">Posted 1 hour ago.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Badge className="w-fit text-xs flex items-center " >{selectedReview?.mood === 'Happy' ? <Smile className="fill-yellow-400 stroke-1.5 w-4 h-4" /> : <Angry className="fill-red-400 stroke-1.5 w-4 h-4 stroke-black" />}</Badge>
                                <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4" />  {selectedReview?.rating}</Badge>
                            </div>
                        </div>
                        <p className="italic mt-2 text-sm ">{selectedReview?.reviewmesg}</p>
                    </CardContent>
                </Card>
                <h1 className="font-bold mt-4 text-sm">My Templates</h1>
                <p className="text-gray-500 my-1 text-xs">Create your templates and use them often.</p>
                <Card className="p-3 rounded-lg border-none gap-3 flex flex-col h-96  overflow-y-auto ">

                    {
                        emailtemplates.map((template) => {
                            return (
                                <CardContent onClick={() => { setSelectedEmailTemplate(template) }} className={` cursor-pointer rounded-lg p-3 ${selectedEmailTemplate === template && ('bg-white')}`}>
                                    <h2 className="font-bold text-sm">{template.subject}</h2>
                                    <p className="text-xs ">{`${template.body.slice(0, 100)}....`}</p>
                                </CardContent>
                            )
                        })
                    }
                </Card>
            </div>
        </div>
    )
};

export default EmailResposeComponent;
