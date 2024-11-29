import { Angry, MoveUpRight, PencilLine, Smile, Star } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import AiResponseIcon from '@/assets/svg/NavAiReasponseIcon.svg?react'
import AiIcon from '@/assets/svg/PremiumPrimaryIcon.svg?react'
import Done from '@/assets/svg/DoneIcon.svg?react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Review } from "@/types/dashboardtypes";
import { reviews } from "@/data/unRepliedReviews";


const ReviewComponent = () => {
    const [selectedReview, setSelectedReview] = useState<Review | null>(reviews.length > 0 ? reviews[0] : null);
    const [readOnly, setReadOnly] = useState(true)
    const navigate = useNavigate();
    const handleReviewClick = (review: Review) => {
        setSelectedReview(review);
    };

    return (
        <div>
            {reviews.length > 0 ? (
                <div className="grid grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
                    <div className="my-3 flex flex-col gap-3">
                        {reviews.map((review, index) => {
                            return (
                                <Card key={index} className="shadow-none border-none rounded-lg cursor-pointer">
                                    <CardHeader className="justify-between px-3 pt-3 pb-1 flex flex-row items-center">
                                        <div className="flex gap-2 items-center">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={review.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                                            </Avatar>
                                            <div>
                                                <h2 className="text-sm font-semibold">{review.fullname}</h2>
                                                <p className="text-gray-400 text-[8px]">Posted 1 hour ago.</p>
                                            </div>
                                        </div>
                                        <Badge className="w-fit text-xs flex items-center"><Star className="stroke-none fill-yellow-400 h-4 w-4" />{review.rating}</Badge>
                                    </CardHeader>
                                    <CardContent className="px-3 py-1">
                                        <p className="text-sm italic text-black">{review.reviewmesg}</p>
                                        <hr className="my-2" />
                                    </CardContent>
                                    <CardFooter className="flex justify-between px-3 pb-3 pt-0">
                                        <Button className={`border-none text-xs font-bold ${review.mood === 'Happy' ? 'bg-dashboardButton' : 'bg-red-100 text-destructive'}`} variant='outline'>
                                            {review.mood === 'Happy' ? <Smile className="fill-yellow-400 stroke-1.5" /> : <Angry className="fill-red-400 stroke-1.5 stroke-black" />} {review.mood}
                                        </Button>
                                        {
                                            review.mood === 'Happy' ? (
                                                <Button className="border-none bg-dashboardButton text-xs font-bold" onClick={() => { handleReviewClick(review) }} variant='outline'><AiIcon /> Generate Response</Button>
                                            ) : (
                                                <div className="gap-2 flex">
                                                    <Button className="border-none bg-dashboardButton rounded-full px-3 text-xs font-bold" onClick={() => { navigate('/dashboard/emailresponse')}} variant='outline'>Email Response <MoveUpRight className="stroke-primary" /> </Button>
                                                    <Button className="border-none bg-dashboardButton rounded-full px-3 text-xs font-bold" onClick={() => { handleReviewClick(review) }} variant='outline'><AiIcon /></Button>
                                                </div>
                                            )
                                        }
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                    {
                        selectedReview && (
                            <Card className="shadow-none border-none rounded-lg relative my-3 h-max">
                                <CardHeader className="pb-3 px-4">
                                    <h1 className="font-bold">View Details</h1>
                                    <hr />
                                </CardHeader>
                                <CardContent className="px-4 pb-1">
                                    <div className="justify-between flex flex-row items-center">
                                        <div className="flex gap-2 items-center">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src='https://github.com/shadcn.png' alt="Avatar" className="h-8 w-8 rounded-full" />
                                            </Avatar>
                                            <div>
                                                <h2 className="text-sm font-semibold">{selectedReview.fullname}</h2>
                                                <p className="text-gray-400 text-[8px]">Posted 1 hour ago.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge className="w-fit text-xs flex items-center">{selectedReview.mood === 'Happy' ? <Smile className="stroke-1.5 fill-yellow-400 h-4 w-4" /> : <Angry className="fill-red-400 stroke-1.5 h-4 w-4" />}</Badge>
                                            <Badge className="w-fit text-xs flex items-center gap-1"><Star className="stroke-none fill-yellow-400 h-4 w-4" />{selectedReview.rating}</Badge>
                                        </div>
                                    </div>
                                    <p className="italic mt-2 text-sm text-gray-500">{selectedReview.reviewmesg.length > 80 ? selectedReview.reviewmesg.slice(0, 80) + '...' : selectedReview.reviewmesg}</p>
                                    <hr className="my-1" />
                                </CardContent>
                                <CardContent>
                                    <div className="flex flex-col mb-40 items-between h-full justify-between">
                                        <div>
                                            <h1 className="font-bold my-2 text-sm">Ai Response</h1>
                                            <textarea readOnly={readOnly} className=" focus:outline-none focus:border-none text-sm  w-full h-[150px] px-1 bg-transparent resize-none no-scrollbar ">Thank you for your fantastic feedback! We're delighted to hear that our application has made your day easier and taken the hassle out of replying to customers. As for why we didn't develop this earlier, well, let's just say good things take time! We're constantly striving to improve, and your recommendation means a lot to us. Thanks for the 4.5 stars—we'll aim for a perfect 5 next time!</textarea>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="absolute bottom-3 right-3 left-3">
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <Button variant='outline' className="border-none bg-dashboardButton fill-primary stroke-primary hover:text-black hover:fill-black text-xs text-primary">
                                            <AiResponseIcon /> Regenerate
                                        </Button>
                                        <div className="flex gap-1 ml-1 lg:gap-2 lg:ml-2">
                                            <Button variant='outline' onClick={() => { setReadOnly(!readOnly) }} className={`border-none text-xs  p-2 px-3 ${readOnly ? "text-primary" : 'bg-primary text-white hover:text-white hover:bg-primary '} `}>
                                                {readOnly ? (
                                                    <> <PencilLine /> Edit</>
                                                ) : (
                                                    <p className="text-sm">Save</p>
                                                )}
                                            </Button>
                                            {readOnly && (
                                                <Button className="px-3 lg:px-4 p-2 text-xs lg:text-sm" >
                                                    Send Response
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                </div>
            ) : (
                <div className="flex flex-col  my-auto h-[55vh] items-center justify-center">
                    <Done />
                    <h1 className="font-semibold mt-3 " >You're all caught up!</h1>
                    <p className="text-gray-500 text-sm ">No more reviews waiting for your reply. 🎉</p>
                </div>
            )}
        </div>
    );
};

export default ReviewComponent;
