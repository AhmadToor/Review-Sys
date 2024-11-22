import { PencilLine, Star } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent,CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import AiResponseIcon from '@/assets/svg/NavAiReasponseIcon.svg?react'
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
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
    
]

const ReviewComponent = () => {
    const [selectedReview, setSelectedReview] = useState<Review>(reviews[0]); 
    const navigate = useNavigate();
  const handleReviewClick = (review : Review ) => {
    setSelectedReview(review); 
  };
  return (
    <div className="grid grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
        <div className="my-3 flex flex-col gap-3  ">
     {reviews.map((review)=>{
        return (
            <Card onClick={()=>{handleReviewClick(review)}} className="shadow-none border-none rounded-lg cursor-pointer">
            <CardHeader className="justify-between px-3 pt-3 pb-1 flex flex-row items-center">
                <div className="flex gap-2 items-center">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={review.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                    </Avatar>
    
                    <div >
                        <h2 className="text-sm font-semibold">{review.fullname}</h2>
                        <p className="text-gray-400 text-[8px]  ">Posted 1 hour ago.</p>
                    </div>
                </div>
                <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4"/>  {review.rating}</Badge>
            </CardHeader>
            <CardContent className="px-3 py-1">
                <p className="text-sm italic text-black">{review.reviewmesg}</p>
            <hr className="my-2"/>
            </CardContent>
    
            <CardFooter className="flex justify-between px-3 pb-3 pt-0">
                <Button className={`border-none  text-xs font-bold ${review.mood === 'Happy'? 'bg-dashboardButton' : 'bg-red-100 text-destructive'}`} variant='outline'>{review.mood === 'Happy'? '😊' : '😡'} {review.mood}</Button>
                <Button className="border-none bg-dashboardButton text-xs font-bold" variant='outline'>😊 Generate Response</Button>
            </CardFooter>
          </Card>
        )
     })}
    </div>
    <Card className="shadow-none border-none rounded-lg relative my-3 h-max ">
        <CardHeader className="pb-3 px-4">
            <h1 className="font-bold">View Details</h1>
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
                <Badge className="w-fit text-xs flex items-center " >{selectedReview.mood === 'Happy'? '😊': '😡'}</Badge>
                <Badge className="w-fit text-xs flex items-center gap-1" > <Star className="stroke-none fill-yellow-400 h-4 w-4"/>  {selectedReview.rating}</Badge>
                </div>
        </div>
        <p className="italic mt-2 text-sm text-gray-500">{selectedReview.reviewmesg.length > 80 ? selectedReview.reviewmesg.slice(0, 80) + '...' : selectedReview.reviewmesg}</p>
        <hr className="my-1" />
        </CardContent>
        <CardContent >
            <div className="flex flex-col mb-52 items-between h-full justify-between">
                <div><h1 className="font-bold my-2 text-sm">Ai Response</h1>
                <p className="my-2 text-sm">Thank you for your fantastic feedback! We're delighted to hear that our application has made your day easier and taken the hassle out of replying to customers. As for why we didn't develop this earlier, well, let's just say  good things take time!  We're constantly striving to improve, and your recommendation means a lot to us. Thanks for the 4.5 stars—we'll aim for a perfect 5 next time!</p></div>
            
            </div>
        </CardContent>
        <div className="absolute bottom-3 right-3 left-3">
                <hr className="my-4" />
                {/* <Button className="lg:text-xs w-full px-2 text-[11px]"><AiResponseIcon className="stroke-white fill-white"/> Hold my bear!! Lemme generate a response...</Button> */}
                <div className="flex justify-between ">
                <Button variant='outline' className="border-none bg-dashboardButton fill-primary stroke-primary hover:text-black hover:fill-black text-xs text-primary">
                 <AiResponseIcon />  Regenerate
                </Button>
                <div className="flex gap-1 ml-1 lg:gap-2 lg:ml-2">
                <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs p-2 px-3 text-primary">
                 <PencilLine/>  Edit
                </Button>
                <Button className="px-3 p-2 " onClick={()=>{navigate('/dashboard/emailresponse')}}>
                    Send Response
                </Button>
                </div>
                </div>
            </div>
    </Card>
    </div>
  )
};

export default ReviewComponent;
