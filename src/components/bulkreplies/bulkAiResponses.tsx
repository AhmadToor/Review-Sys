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
interface Review {
    fullname: string;
    avatar: string;
    rating: number;
    reviewmesg: string;
    mood: string;
}

const reviews: Review[] = [
    {
        fullname : 'Laoshe Lost',
        avatar : 'https://github.com/shadcn.png',
        rating : 4.5,
        reviewmesg : 'What a fantastic application. It has made my day by taking away the hassle of replying to the customer. I highly recommend it but giving it 4.5 because why did the developer not developed this earlier.',
        mood : 'Happy'
    }, 
    {
        fullname : 'Maoshe Found',
        avatar : 'https://github.com/shadcn.png',
        rating : 1.1,
        reviewmesg : 'What a pathetic service being provided. The tables were not clean and the flies were coming at us like the drones. And we were trying to save ourselves from these drone attacks in the meanwhile one of them succeeded to ruin our food at the table. It crashed into the food.',
        mood : 'Angry'
    }, 
    {
        fullname : 'Laoshe Lost',
        avatar : 'https://github.com/shadcn.png',
        rating : 4.9,
        reviewmesg : 'What a fantastic application. It has made my day by taking away the hassle of replying to the customer. I highly recommend it but giving it 4.5 because why did the developer not developed this earlier.',
        mood : 'Happy'
    },
    {
        fullname : 'Maoshe Found',
        avatar : 'https://github.com/shadcn.png',
        rating : 2.1,
        reviewmesg : 'What a pathetic service being provided. The tables were not clean and the flies were coming at us like the drones. And we were trying to save ourselves from these drone attacks in the meanwhile one of them succeeded to ruin our food at the table. It crashed into the food.',
        mood : 'Angry'
    },
    {
        fullname : 'Maoshe Found',
        avatar : 'https://github.com/shadcn.png',
        rating : 2.1,
        reviewmesg : 'What a pathetic service being provided. The tables were not clean and the flies were coming at us like the drones. And we were trying to save ourselves from these drone attacks in the meanwhile one of them succeeded to ruin our food at the table. It crashed into the food.',
        mood : 'Angry'
    },
    {
        fullname : 'Maoshe Found',
        avatar : 'https://github.com/shadcn.png',
        rating : 2.1,
        reviewmesg : 'What a pathetic service being provided. The tables were not clean and the flies were coming at us like the drones. And we were trying to save ourselves from these drone attacks in the meanwhile one of them succeeded to ruin our food at the table. It crashed into the food.',
        mood : 'Angry'
    },
    {
        fullname : 'Maoshe Found',
        avatar : 'https://github.com/shadcn.png',
        rating : 2.1,
        reviewmesg : 'What a pathetic service being provided. The tables were not clean and the flies were coming at us like the drones. And we were trying to save ourselves from these drone attacks in the meanwhile one of them succeeded to ruin our food at the table. It crashed into the food.',
        mood : 'Angry'
    },
    
]
const BulkAiResponses = () => {
    const [selectedReview, setSelectedReview] = useState<Review>(reviews[0]); 
    const [aiResponseReadable, setAiResponseReadable] = useState(true)
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
    const handleAiResponseEditable = ()=>{
        setAiResponseReadable(!aiResponseReadable)
    }
  return (
    <div>
       <h2 className="font-bold">46 Responses Generated</h2>
       <p className="text-gray-500 my-1 text-xs">You can send the replies to all the reviews at once.</p>
       <div className="grid pt-6 grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
       <div className="flex flex-col gap-4"> 
        {reviews.map((review,index)=>{
            return (
                <Card className="border-none rounded-lg cursor-pointer w-full " key={index} onClick={()=>{setSelectedReview(review)}} >
          
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
            <p className="italic mt-2 text-xs text-gray-500">{review.reviewmesg.length > 80 ? review.reviewmesg.slice(0, 80) + '...' : review.reviewmesg}</p>
                </CardContent>
                <CardContent className="p-3 pt-0">
                    <hr className="my-1.5" />
                    <h1 className="font-bold text-sm">Ai Response</h1>
                    <p className="text-xs">Thank you for your fantastic feedback! We're delighted to hear that our application has made your day easier and taken the hassle out of replying to customers. As for why we didn't develop this earlier, well, let's just say  good things take time!  We're constantly striving to improve, and your recommendation means a lot to us. Thanks for the 4.5 stars—we'll aim for a perfect 5 next time!</p>
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
            <textarea readOnly={aiResponseReadable}  className=" focus:outline-none focus:border-none text-sm mt-2 w-full h-[150px] py-2 px-1 bg-transparent resize-none no-scrollbar ">Thank you for your fantastic feedback! We're delighted to hear that our application has made your day easier and taken the hassle out of replying to customers. As for why we didn't develop this earlier, well, let's just say  good things take time!  We're constantly striving to improve, and your recommendation means a lot to us. Thanks for the 4.5 stars—we'll aim for a perfect 5 next time!</textarea>  
        </CardContent>
        
        <div className="absolute bottom-3 right-3 left-3">
                <hr className="my-4" />
               
                {aiResponseReadable?  <div className="flex justify-between">
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs text-primary"> Regenerate</Button>
                <div className="flex gap-2">
                <Button variant='outline' onClick={handleAiResponseEditable} className="border-none bg-dashboardButton hover:text-black text-xs "><PenLine  className="stroke-primary"/> Edit</Button>
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs"><X className="stroke-red-500"/> Remove</Button>                

                </div> </div> : <div className="flex justify-end gap-2">
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs ">Cancel</Button>
                <Button onClick={handleAiResponseEditable}  className=" text-xs">Save</Button>                
                    </div>}
            </div>
    </Card>
    <Dialog  open={isDialogOpen}>
      <DialogTrigger asChild >
      <Button onClick={handleDialogTrigger} disabled={aiResponseReadable? false : true}>Send Responses</Button>
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
        <h1 className="font-bold mt-6 mb-1">46 Responses Sent</h1>
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