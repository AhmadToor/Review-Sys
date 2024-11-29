import { Angry, PenLine, Smile, Star, X } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog,  DialogContent, DialogTrigger } from "../ui/dialog";
import LoadingIcon from '@/assets/svg/LoadingIcon.svg?react'
import DoneIcon from '@/assets/svg/DoneIcon.svg?react'
import { useNavigate } from "react-router-dom";
import { Review } from "@/types/dashboardtypes";
import { aiResponses, reviews } from "@/data/unRepliedReviews";



const BulkAiResponses = () => {
    const [selectedReview, setSelectedReview] = useState<Review>(reviews[0]); 
    const [aiResponseReadable, setAiResponseReadable] = useState(true)
    const [textareaValue, setTextareaValue] = useState<string>(aiResponses.find(response => response.reviewId === selectedReview?.id)?.aiResponse || '');
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [secondDialog, setSecondDialog] = useState(false)
   const navigate = useNavigate()
  
  const handleDialogTrigger = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
        setIsDialogOpen(false);
        setSecondDialog(true);
        
    }, 3000);
};
const handleReviewClick = (review: Review) => {
    setSelectedReview(review);
    setTextareaValue(aiResponses.find(response => response.reviewId === review?.id)?.aiResponse || '');
};
    const handleAiResponseEditable = (review: Review)=>{
        setAiResponseReadable(!aiResponseReadable)
        setTextareaValue(aiResponses.find(response => response.reviewId === review?.id)?.aiResponse || '');
    }
    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    };
  return (
    <div>
       <h2 className="font-bold">{reviews.length} Responses Generated</h2>
       <p className="text-gray-500 my-1 text-xs">You can send the replies to all the reviews at once.</p>
       <div className="grid pt-6 grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
       <div className="flex flex-col gap-4"> 
        {reviews.map((review,index)=>{
            return (
                <Card className="border-none rounded-lg cursor-pointer w-full " key={index} onClick={()=>{handleReviewClick(review)}} >
          
                <CardContent className="p-3 pb-0">
                <div className="justify-between flex flex-row items-center">
            <div className="flex gap-2 items-center">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src='https://github.com/shadcn.png' alt="Avatar" className="h-8 w-8 rounded-full" />
                        </Avatar>
        
                        <div >
                            <h2 className="text-sm font-semibold">{review.fullname}</h2>
                            <p className="text-gray-400 text-[8px]  ">Posted 1 hour ago.</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                    <Badge className={`border-none  text-xs font-bold ${review.mood === 'Happy'? 'bg-dashboardButton' : 'bg-red-100 '}`} >{review.mood === 'Happy'? <Smile className="stroke-1.5 fill-yellow-400 h-4 w-4 mr-1"/> : <Angry className="fill-red-400 stroke-1.5 h-4 w-4 mr-1"/>} {review.mood}</Badge>
                    <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4"/>  {review.rating}</Badge>
                    </div>
            </div>
            <p className="italic mt-2 text-xs text-gray-500">{review.reviewmesg.length > 100 ? review.reviewmesg.slice(0, 100) + '...' : review.reviewmesg}</p>
                </CardContent>
                <CardContent className="p-3 pt-0">
                    <hr className="my-1.5" />
                    <h1 className="font-bold text-sm">Ai Response</h1>
                    <p className="text-xs">{aiResponses.find(response => response.reviewId === review.id)?.aiResponse}</p>
                </CardContent>
            </Card>
            )
        })}</div>
        <div className="flex flex-col gap-3">
        <Card className="shadow-none border-none rounded-lg relative mb-3 h-max ">
        <CardHeader className="pb-3 px-4">
            <h1 className="font-bold">View Response</h1>
            <hr  />
        </CardHeader>
        <CardContent className="px-4 pb-1 " >
        <div className="justify-between flex flex-row items-center">
        <div className="flex gap-2 items-center">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src='https://github.com/shadcn.png' alt="Avatar" className="h-8 w-8 rounded-full" />
                    </Avatar>
    
                    <div >
                        <h2 className="text-sm font-semibold">{selectedReview.fullname}</h2>
                        <p className="text-gray-400 text-[8px]  ">Posted 1 hour ago.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <Badge className={`w-fit text-xs flex items-center ${selectedReview.mood === 'Happy'? 'bg-dashboardButton' : 'bg-red-100 '}`} >{selectedReview.mood === 'Happy'? <Smile className="stroke-1.5 fill-yellow-400 h-4 w-4"/> : <Angry className="fill-red-400 stroke-1.5 h-4 w-4"/>}</Badge>
                <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4"/>  {selectedReview.rating}</Badge>
                </div>
        </div>
        <p className=" mt-2 text-sm text-gray-500 italic">{ selectedReview.reviewmesg}</p>
        <hr className="my-4" />
       
        </CardContent>
        <CardContent className="mb-24 p-3 pt-0">
            <h1 className="font-bold ">Ai Response</h1>
            <textarea onChange={handleTextareaChange} readOnly={aiResponseReadable}  className=" focus:outline-none focus:border-none text-sm mt-2 w-full h-[150px] py-2 px-1 bg-transparent resize-none no-scrollbar " value={textareaValue}/>  
        </CardContent>
        
        <div className="absolute bottom-3 right-3 left-3">
                <hr className="my-4" />
               
                {aiResponseReadable?  <div className="flex justify-between">
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs text-primary"> Regenerate</Button>
                <div className="flex gap-2">
                <Button variant='outline' onClick={()=>{setAiResponseReadable(!aiResponseReadable)}} className="border-none bg-dashboardButton hover:text-black text-xs "><PenLine  className="stroke-primary"/> Edit</Button>
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs"><X className="stroke-red-500"/> Remove</Button>                

                </div> </div> : <div className="flex justify-end gap-2">
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs " onClick={()=>{handleAiResponseEditable(selectedReview)}} >Cancel</Button>
                <Button onClick={()=>{setAiResponseReadable(!aiResponseReadable)}}  className=" text-xs">Save</Button>                
                    </div>}
            </div>
    </Card>
    <Dialog  open={isDialogOpen}>
      <DialogTrigger asChild >
      <Button onClick={handleDialogTrigger} disabled={!aiResponseReadable}>Send Responses</Button>
      </DialogTrigger>
      <DialogContent  showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
        <LoadingIcon/>
        <h1 className="font-bold mt-6 mb-1">Sending Responses</h1>
        <p className="text-gray-500 text-sm text-center">Just hold my bear!! It can take a while to send all the responses.</p>
      </DialogContent>
    </Dialog>
      
    <Dialog open={secondDialog} >
    
        
      
      <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
        <DoneIcon/>
        <h1 className="font-bold mt-6 mb-1">{reviews.length} Responses Sent</h1>
        <p className="text-gray-500 text-sm text-center">Just hold my bear!! It can take a while to send all the responses.</p>
        <Button variant='outline' onClick={()=>{setSecondDialog(false); navigate('/dashboard')}} className="border-none w-full mt-2 bg-gray-200 hover:text-black text-xs ">Lets Go Back</Button>
      </DialogContent>
      
    </Dialog>
    </div>
       </div>
    </div>
  )
};

export default BulkAiResponses;
