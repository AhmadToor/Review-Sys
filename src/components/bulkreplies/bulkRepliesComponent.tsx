import { Avatar } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Angry, Check, Smile, Star } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import LoadingIcon from '@/assets/svg/LoadingIcon.svg?react';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Review } from "@/types/dashboardtypes";
import Done from '@/assets/svg/DoneIcon.svg?react'

interface Props {
    setAiResponse: Dispatch<SetStateAction<boolean>>;
    selectedReviewsArray: Review[];
    reviews: Review[];
    setSelectedReviewsArray: Dispatch<SetStateAction<Review[]>>;
}

const BulkRepliesComponent = ({ setAiResponse, reviews, setSelectedReviewsArray, selectedReviewsArray }: Props) => {
    const [selectedReview, setSelectedReview] = useState<Review>(reviews[0]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleReviewClick = (review: Review) => {
        setSelectedReview(review);
        if (selectedReviewsArray.includes(review)) {
            setSelectedReviewsArray(selectedReviewsArray.filter(item => item !== review));
        } else {
            setSelectedReviewsArray([review, ...selectedReviewsArray]);
        }
    };

    const handleDialogTrigger = () => {
        setIsDialogOpen(true);
        setTimeout(() => {
            setIsDialogOpen(false);
            setAiResponse(true);
        }, 3000);
    };

    return (
        <>
            {reviews.length > 0 ? (
                <div className="grid pt-3 grid-cols-[6fr_5fr] lg:grid-cols-[3fr_2fr] gap-3">
                    <div className="gap-3 flex flex-col">
                        {reviews.map((review, index) => (
                            <div className="flex gap-4 items-center cursor-pointer" key={index} onClick={() => { handleReviewClick(review); }}>
                                <div className={selectedReviewsArray.includes(review) ? `bg-primary w-max rounded-full p-1.5` : `bg-gray-200 w-max rounded-full p-1.5`}>
                                    <Check className={selectedReviewsArray.includes(review) ? `h-3 w-3 stroke-white` : `h-3 w-3`} />
                                </div>
                                <Card className="border-none rounded-lg cursor-pointer w-full">
                                    <CardContent className="p-3">
                                        <div className="justify-between flex flex-row items-center">
                                            <div className="flex gap-2 items-center">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage src={review.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                                                </Avatar>
                                                <div>
                                                    <h2 className="text-sm font-semibold">{review.fullname}</h2>
                                                    <p className="text-gray-400 text-[8px]">Posted 1 hour ago.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Badge className={`border-none text-xs font-bold ${review.mood === 'Happy' ? 'bg-dashboardButton' : 'bg-red-100 text-destructive '}`}>
                                                    {review.mood === 'Happy' ? <Smile className="stroke-1.5 fill-yellow-400 h-4 w-4" /> : <Angry className="fill-red-400 stroke-black stroke-1.5 h-4 w-4" />}
                                                </Badge>
                                                <Badge className="w-fit text-xs flex items-center gap-1">
                                                    <Star className="stroke-none fill-yellow-400 h-4 w-4" /> {review.rating.toFixed(1)}
                                                </Badge>
                                            </div>
                                        </div>
                                        <p className="italic mt-2 text-sm text-gray-500">{review.reviewmesg.length > 80 ? review.reviewmesg.slice (0, 80) + '...' : review.reviewmesg}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <Card className="shadow-none border-none rounded-lg relative mb-3 h-max">
                            <CardHeader className="pb-3 px-4">
                                <h1 className="font-bold">View Response</h1>
                                <hr />
                            </CardHeader>
                            <CardContent className="px-4 pb-1 mb-24">
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
                                        <Badge className="w-fit text-xs flex items-center gap-1">
                                            <Star className="stroke-none fill-yellow-400 h-4 w-4" /> {selectedReview.rating.toFixed(1)}
                                        </Badge>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm">{selectedReview.reviewmesg}</p>
                            </CardContent>

                            <div className="absolute bottom-3 right-3 left-3">
                                <hr className="my-4" />
                                <Badge className={`w-fit text-xs flex items-center ${selectedReview.mood === 'Happy' ? 'bg-dashboardButton' : 'bg-red-100 text-destructive '}`}>
                                    {selectedReview.mood === 'Happy' ? (
                                        <>
                                            <Smile className="stroke-1.5 fill-yellow-400 h-4 w-4 mr-1" /> {selectedReview.mood}
                                        </>
                                    ) : (
                                        <>
                                            <Angry className="stroke-1.5 fill-red-400 stroke-black h-4 w-4 mr-1" /> {selectedReview.mood}
                                        </>
                                    )}
                                </Badge>
                            </div>
                        </Card>

                        <Dialog open={isDialogOpen}>
                            <DialogTrigger asChild>
                                <Button onClick={handleDialogTrigger} disabled={selectedReviewsArray.length === 0}>
                                    Generate Responses for {selectedReviewsArray.length} reviews
                                </Button>
                            </DialogTrigger>
                            <DialogContent showCloseButton={false} className="sm:max-w-[350px] gap-0 p-4 items-center flex flex-col">
                                <LoadingIcon />
                                <h1 className="font-bold mt-6 mb-1">Generating Responses</h1>
                                <p className="text-gray-500 text-sm text-center">Just hold my bear!! It can take a while to generate all the responses.</p>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col my-auto h-[55vh] items-center justify-center">
                    <Done />
                    <h1 className="font-semibold mt-3">You're all caught up!</h1>
                    <p className="text-gray-500 text-sm">No more reviews waiting for your reply. 🎉</p>
                </div>
            )}
        </>
    );
};

export default BulkRepliesComponent;