import { Avatar } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Angry, Check, Smile, Star } from "lucide-react";
import {  Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import LoadingIcon from '@/assets/svg/LoadingIcon.svg?react'
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
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
interface Props {
    setAiResponse : Dispatch<SetStateAction<boolean>>
}
const BulkRepliesComponent = ({setAiResponse}: Props) => {
    const [selectedReview, setSelectedReview] = useState<Review>(reviews[0]); 
    const [isDialogOpen, setIsDialogOpen] = useState(false)
   
  const handleReviewClick = (review : Review ) => {
    setSelectedReview(review); 
  };
  const handleDialogTrigger = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
        setIsDialogOpen(false);
        setAiResponse(true)
    }, 3000);
};
  return (
    <div className="grid pt-6 grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
      <div className="gap-3 flex flex-col">
        {reviews.map((review, index)=>{
            return (
                <div className="flex gap-4 items-center cursor-pointer" key={index} onClick={()=>{handleReviewClick(review)}}>
                    <div className={selectedReview == review? `bg-primary w-max rounded-full p-1.5` :`bg-gray-200 w-max rounded-full p-1.5`}><Check className={selectedReview === review? `h-3 w-3 stroke-white`: ` h-3 w-3`}/></div>
                    <Card className="border-none rounded-lg cursor-pointer w-full " >
          
                <CardContent className="p-3">
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
            <p className="italic mt-2 text-sm text-gray-500">{review.reviewmesg.length > 80 ? review.reviewmesg.slice(0, 80) + '...' : review.reviewmesg}</p>
                </CardContent>
            </Card>
                </div>
            )
        })}
      </div>

        <div className="flex flex-col gap-3">
        <Card className="shadow-none border-none rounded-lg relative mb-3 h-max ">
        <CardHeader className="pb-3 px-4">
            <h1 className="font-bold">View Response</h1>
            <hr  />
        </CardHeader>
        <CardContent className="px-4 pb-1 mb-24" >
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
                
                <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4"/>  {selectedReview.rating}</Badge>
                </div>
        </div>
        <p className=" mt-2 text-sm ">{ selectedReview.reviewmesg}</p>
       
        </CardContent>
        
        <div className="absolute bottom-3 right-3 left-3">
                <hr className="my-4" />
                <Badge className={`w-fit text-xs flex items-center ${selectedReview.mood === 'Happy' ? 'bg-dashboardButton' : 'bg-red-100 '}`}>
  {selectedReview.mood === 'Happy' ? (
    <>
      <Smile className="stroke-1.5 fill-yellow-400 h-4 w-4 mr-1" /> {selectedReview.mood}
    </>
  ) : (
    <>
      <Angry className="stroke-1.5 fill-red-400 h-4 w-4 mr-1" /> {selectedReview.mood}
    </>
  )}
</Badge>
            </div>
    </Card>
    
    <Dialog open={isDialogOpen} >
      <DialogTrigger asChild >
      <Button onClick={handleDialogTrigger}>Generate Responses for 46 reviews</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4  items-center flex flex-col">
        <LoadingIcon/>
        <h1 className="font-bold mt-6 mb-1">Generating Responses</h1>
        <p className="text-gray-500 text-sm text-center">Just hold my bear!! It can take a while to generate all the responses.</p>
      </DialogContent>
    </Dialog>
        </div>
    
    </div>
  )
};

export default BulkRepliesComponent;
