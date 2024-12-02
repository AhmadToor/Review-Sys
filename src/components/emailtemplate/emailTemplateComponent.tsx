import { PencilLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useState } from "react";
import EmailTextEditor from "../emailresponse/emailTextEditor";
import { Dialog, DialogContent } from "../ui/dialog";
import TrashIcon from '@/assets/svg/TrashIcon.svg?react'
import DoneIcon from '@/assets/svg/DoneIcon.svg?react'
import { emailtemplates } from "@/data/emailTemplatesData";





const EmailTemplateComponent = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(emailtemplates[0])
    const [firstDialog, setFirstDialog] = useState(false)
    const [secondDialog, setSecondDialog] = useState(false)
    const [thirdDialog, setThirdDialog] = useState(false)
    const [secondDivContent, setSecondScreenContent] = useState("ViewTemplate")

    const toggleSecondDialog = () => {
        setFirstDialog(false)
        setSecondDialog(true)
        setTimeout(() => {
            setSecondDialog(false);
            setThirdDialog(true)
        }, 3000);
    }


    return (
        <div className="grid grid-cols-[3fr_2fr] gap-3">
            <div className="flex flex-col gap-3 mt-4">
                {emailtemplates.map((template, index) => {
                    return (
                        <Card key={index} className="border-none p-3 cursor-pointer" onClick={() => { setSelectedTemplate(template); console.log('Done') }}>
                            <CardContent className="p-0 space-y-1">
                                <h1 className="text-sm font-semibold">{template.subject}</h1>
                                <p className="text-xs">{`${template.body.slice(0, 150)}...`}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            <div className="mt-4">
                <Card className="border-none rounded-xl pb-20  relative">
                    <CardHeader className="space-y-2 pb-2">
                        <h2 className="font-bold ">{secondDivContent === 'EditTemplate'? 'Edit Template' : 'View Details'}</h2>


                        <hr />

                        <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p className="font-semibold">{selectedTemplate.subject}</p></div>
                        <hr />

                    </CardHeader>
                    <CardContent className=" text-sm">
                        {secondDivContent === "ViewTemplate" && (
                        <>
                            <p className="text-xs text-gray-500 mb-3 ">Body:</p>
                            <div dangerouslySetInnerHTML={{ __html: selectedTemplate.body.replace(/(?:\r\n|\r|\n)/g, '<br />') }} />
                        </>
                        )
                    }
                        {secondDivContent === "AiTemplate" && (
                        <>
                            <h1 className="text-sm font-semibold my-3">Regenerate Respone</h1>
                         <p className="text-xs font-semibold my-1"> Tell Ai what to do</p>
                    <textarea className=" focus:outline-none bg-gray-100 rounded-xl focus:border-none text-sm mt-1 w-full h-[150px] py-2 px-1 text-gray-800 resize-none no-scrollbar " defaultValue="Hey generate an email that I can use to address the issues of the customers who are giving me bad reviews on my business. The tone should be very friendly and satisfactory. It should bring up the conversation to solve the issues that they are higlighting in the reviews."/>

                        </>
                        )
                    }
                        {secondDivContent === "EditTemplate" && (
                        <>
                           <EmailTextEditor>{selectedTemplate.body}</EmailTextEditor>
                        </>
                        )
                    }
                    </CardContent>
                    <CardFooter className="absolute flex-col bottom-3 p-0 right-3 left-3">
                        <hr className="w-full my-2" />
                        {secondDivContent === "ViewTemplate" && (
                            <div className="flex justify-between w-full ">
                            <Button variant='outline' className="border-none bg-dashboardButton text-black text-xs " onClick={() => { setSecondScreenContent("AiTemplate") }}>
                                Regenerate Email Content
                            </Button>

                            <div className="flex gap-1">
                                <Button variant='outline' className="border-none bg-dashboardButton   text-black text-xs " onClick={() => { setSecondScreenContent("EditTemplate") }}>
                                    <PencilLine className="stroke-blue-500" />
                                </Button>
                                <Button variant='outline' onClick={() => { setFirstDialog(true) }} className="border-none bg-dashboardButton   text-black text-xs ">
                                    <Trash2 className="stroke-red-500" />
                                </Button>
                            </div>


                        </div>
                        )}
                        {secondDivContent === "AiTemplate" && (
                            <div className="flex justify-end w-full ">


                                <div className="flex gap-1">
                                    <Button variant='outline' onClick={() => { setSecondScreenContent("ViewTemplate") }} className="border-none bg-dashboardButton   text-black text-xs ">
                                        Cancel
                                    </Button>
                                    <Button className="text-xs" onClick={() => { setSecondScreenContent("EditTemplate") }}>
                                        Generate Response
                                    </Button>
                                </div>
                        
                        
                            </div>
                        )}
                        {secondDivContent === "EditTemplate" && (
                            <div className="flex justify-end w-full ">


                             <div className="flex gap-1">
                                 <Button variant='outline' onClick={() => { setSecondScreenContent("ViewTemplate") }} className="border-none bg-dashboardButton   text-black text-xs ">
                                     Cancel
                                 </Button>
                                 <Button className="text-xs" onClick={() => { setSecondScreenContent("ViewTemplate") }}>
                                     Save
                                 </Button>
                             </div>
                        
                        
                         </div>
                        )}
                    </CardFooter>
                </Card>



            </div>

            <Dialog open={firstDialog}>
                <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
                    <TrashIcon />
                    <h1 className="font-bold mt-4 mb-1">Delete Template</h1>
                    <p className="text-gray-500 text-sm text-center">Are you sure that you want to delete this email template.</p>
                    <div className="flex gap-2 w-full mt-3">

                        <Button variant='outline' onClick={() => { setFirstDialog(false) }} className="border-none bg-dashboardButton w-full  text-black text-xs ">
                            Cancel
                        </Button>

                        <Button className="w-full" onClick={toggleSecondDialog}>Delete Response</Button>
                    </div>
                </DialogContent>

            </Dialog>
            <Dialog open={secondDialog}>
                <DialogContent showCloseButton={false} className="sm:max-w-[300px] gap-0 p-4  items-center flex flex-col">
                    <TrashIcon />
                    <h1 className="font-bold mt-4 mb-1">Deleting Template</h1>
                    <p className="text-gray-500 text-sm text-center">You won’t be able to recover it anymore.</p>
                </DialogContent>

            </Dialog>
            <Dialog open={thirdDialog}>
                <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
                    <DoneIcon />
                    <h1 className="font-bold mt-4 mb-1">Template Deleted</h1>
                    <p className="text-gray-500 text-sm text-center">You won’t be able to recover it anymore. But you can still create a new one.</p>
                    <Button variant='outline' onClick={() => { setThirdDialog(false) }} className="border-none w-full mt-2 bg-gray-200 hover:text-black text-xs ">Lets Go Back</Button>
                </DialogContent>

            </Dialog>
        </div>
    )
};

export default EmailTemplateComponent;
