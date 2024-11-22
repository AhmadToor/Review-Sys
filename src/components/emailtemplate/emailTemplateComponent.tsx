import { PencilLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useState } from "react";
import EmailTextEditor from "../emailresponse/emailTextEditor";
import { Dialog,  DialogContent } from "../ui/dialog";
import TrashIcon from '@/assets/svg/TrashIcon.svg?react'
import DoneIcon from '@/assets/svg/DoneIcon.svg?react'


const emailTemplates = [
    {
        'title': 'Itny naraz q ho bhae',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
    {
        'title': 'I’ve got something for ya',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
    {
        'title': 'Love the way you lie',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
    {
        'title': 'Buddy koi sense hai is baat ki',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
    {
        'title': 'Itny naraz q ho bhae',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
    {
        'title': 'Buddy koi sense hai is baat ki',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
    {
        'title': 'Love the way you lie',
        'body': 'Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....'
    },
]


const EmailTemplateComponent = () => {
    const [firstDialog, setFirstDialog] = useState(false)
    const [secondDialog, setSecondDialog] = useState(false)
    const [thirdDialog, setThirdDialog] = useState(false)

    const toggleSecondDialog  =  ()=>{
        setFirstDialog(false)
        setSecondDialog(true)
        setTimeout(() => {
            setSecondDialog(false);
            setThirdDialog(true)
        }, 3000); 
    }

    const TemplateBodyPreview = () => {
        return (
            <Card className="border-none rounded-xl pb-20  relative">
                <CardHeader className="space-y-2 pb-2">
                    <h2 className="font-bold ">View Details</h2>


                    <hr />

                    <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p className="font-semibold">Itnay naraz q ho bhae</p></div>
                    <hr />

                </CardHeader>
                <CardContent className=" text-sm">

                    <p className="text-xs text-gray-500 mb-3 ">Body:</p>
                    <p>Hi [Customer Name], hope you are in good health.</p>
                    <br />
                    <p>We have an exciting update for you: there are now no fewer than 3 brand new places ready to rent in Lahore.</p>
                    <br />
                    <p>Are you curious about the available rental options in Lahore?</p>
                    <br />
                    <p>Interesting options have recently been added that seamlessly meet your wishes for your new stay. Do you see something that appeals to you? You have the option to arrange a viewing directly via the website or ask questions about the place in question. It’s now easier than ever to take your next step towards your ideal home.</p>
                    <br />
                    <p>Maan jao na yaaaar. Apni ki hui bakwas wapis lylo.</p>
                    <br />
                    <p>Thanks</p>


                </CardContent>
                <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                    <hr className="w-full my-2" />
                    <div className="flex justify-between w-full ">
                        <Button variant='outline' onClick={() => { setSecondScreenContent(GenerateResponseComponent) }} className="border-none bg-dashboardButton text-black text-xs ">
                            Regenerate Email Content
                        </Button>

                        <div className="flex gap-1">
                            <Button variant='outline' onClick={() => { setSecondScreenContent(EditTemplatePreview) }} className="border-none bg-dashboardButton   text-black text-xs ">
                                <PencilLine className="stroke-blue-500" />
                            </Button>
                            <Button variant='outline' onClick={()=>{setFirstDialog(true)}} className="border-none bg-dashboardButton   text-black text-xs ">
                                        <Trash2 className="stroke-red-500" />  
                                    </Button>
                        </div>


                    </div>
                </CardFooter>
            </Card>

        )
    }
    const EditTemplatePreview = () => {
        return (
            <Card className="border-none rounded-xl pb-20  relative">
                <CardHeader className="space-y-2 pb-2">
                    <h2 className="font-bold ">Edit Details</h2>


                    <hr />

                    <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p className="font-semibold">Itnay naraz q ho bhae</p></div>
                    <hr />

                </CardHeader>
                <CardContent className=" text-sm">
                    <EmailTextEditor />

                </CardContent>
                <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                    <hr className="w-full my-2" />
                    <div className="flex justify-end w-full ">


                        <div className="flex gap-1">
                            <Button variant='outline' onClick={() => { setSecondScreenContent(TemplateBodyPreview) }} className="border-none bg-dashboardButton   text-black text-xs ">
                                Cancel
                            </Button>
                            <Button className="text-xs" onClick={() => { setSecondScreenContent(TemplateBodyPreview) }}>
                                Save
                            </Button>
                        </div>


                    </div>
                </CardFooter>
            </Card>
        )
    }

    const GenerateResponseComponent = () => {
        return (
            <Card className="border-none rounded-xl pb-20  relative">
                <CardHeader className="space-y-2 pb-2">
                    <h2 className="font-bold ">View Details</h2>


                    <hr />

                    <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p className="font-semibold">Itnay naraz q ho bhae</p></div>
                    <hr />

                </CardHeader>
                <CardContent className=" text-sm">
                    <h1 className="text-sm font-semibold my-3">Regenerate Respone</h1>
                    <p className="text-xs font-semibold my-1"> Tell Ai what to do</p>
                    <textarea className=" focus:outline-none bg-gray-100 rounded-xl focus:border-none text-sm mt-1 w-full h-[150px] py-2 px-1 text-gray-800 resize-none no-scrollbar ">Hey generate an email that I can use to address the issues of the customers who are giving me bad reviews on my business. The tone should be very friendly and satisfactory. It should bring up the conversation to solve the issues that they are higlighting in the reviews. </textarea>

                </CardContent>
                <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                    <hr className="w-full my-2" />
                    <div className="flex justify-end w-full ">


                        <div className="flex gap-1">
                            <Button variant='outline' onClick={() => { setSecondScreenContent(TemplateBodyPreview) }} className="border-none bg-dashboardButton   text-black text-xs ">
                                Cancel
                            </Button>
                            <Button className="text-xs" onClick={() => { setSecondScreenContent(EditTemplatePreview) }}>
                                Generate Response
                            </Button>
                        </div>


                    </div>
                </CardFooter>
            </Card>
        )
    }
    const [secondDivContent, setSecondScreenContent] = useState(TemplateBodyPreview)
    return (
        <div className="grid grid-cols-[3fr_2fr] gap-3">
            <div className="flex flex-col gap-3 mt-4">
                {emailTemplates.map((template) => {
                    return (
                        <Card className="border-none p-3 cursor-pointer">
                            <CardContent className="p-0 space-y-1">
                                <h1 className="text-sm font-semibold">{template.title}</h1>
                                <p className="text-xs">{template.body}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            <div className="mt-4">
                {secondDivContent}


            </div>

            <Dialog open={firstDialog}>
      <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
        <TrashIcon/>
        <h1 className="font-bold mt-4 mb-1">Delete Template</h1>
        <p className="text-gray-500 text-sm text-center">Are you sure that you want to delete this email template.</p>
        <div className="flex gap-2 w-full mt-3">
           
            <Button variant='outline' onClick={()=>{setFirstDialog(false)}} className="border-none bg-dashboardButton w-full  text-black text-xs ">
                                Cancel
                            </Button>
           
            <Button className="w-full" onClick={toggleSecondDialog}>Delete Response</Button>
        </div>
      </DialogContent>
      
    </Dialog>
            <Dialog open={secondDialog}>
      <DialogContent showCloseButton={false} className="sm:max-w-[300px] gap-0 p-4  items-center flex flex-col">
        <TrashIcon/>
        <h1 className="font-bold mt-4 mb-1">Deleting Template</h1>
        <p className="text-gray-500 text-sm text-center">You won’t be able to recover it anymore.</p>
      </DialogContent>
      
    </Dialog>
            <Dialog open={thirdDialog}>
      <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
        <DoneIcon/>
        <h1 className="font-bold mt-4 mb-1">Template Deleted</h1>
        <p className="text-gray-500 text-sm text-center">You won’t be able to recover it anymore. But you can still create a new one.</p>
        <Button variant='outline' onClick={()=>{setThirdDialog(false)}}  className="border-none w-full mt-2 bg-gray-200 hover:text-black text-xs ">Lets Go Back</Button>
      </DialogContent>
      
    </Dialog>
        </div>
    )
};

export default EmailTemplateComponent;
