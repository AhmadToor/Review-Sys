import { useState } from "react";
import { Button } from "../ui/button";
import BulkRepliesComponent from "./bulkRepliesComponent";
import BulkAiResponses from "./bulkAiResponses";
import SearchBar from "../_shared/searchBar";
import { Review } from "@/types/dashboardtypes";
import { reviews } from "@/data/unRepliedReviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const BulkRepliesSection = () => {
  const [isAiResponse, setIsAiresponse] = useState(false)
  const [selectedReviewsArray, setSelectedReviewsArray] = useState<Review[]>([reviews[0]]); 
  return (
    <div className="mt-6">
     
     
       {isAiResponse? <BulkAiResponses/>
       : (<>
        <h2 className="font-bold">Select Reviews</h2>
        <p className="text-gray-500 my-1 text-xs">Click on card to unselect the reviews, you do not want to respond to. </p>
        <Tabs defaultValue="all" className="">
<div className=" flex justify-between items-center">
<TabsList className="text-sm flex flex-row gap-4 bg-white rounded-full p-7 mt-3 px-4  w-max">
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="all">All</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="5-stars">5.0 Stars</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="4-stars">4.0 Stars</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="3-stars">3.0 Stars</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="2-stars">2.0 Stars</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="1-stars">1.0 Stars</TabsTrigger>
</TabsList>
{reviews.length>0 && (
          <div className="flex gap-1">
          <SearchBar placeholder="Search Ai Responses" className="hidden lg:flex"  />
          <Button variant='outline' onClick={()=>{setSelectedReviewsArray(reviews)}} className="border-none bg-dashboardButton hover:text-black text-xs text-primary">Select All</Button>
          </div>
        )}
</div>
  <TabsContent  value="all">
        <BulkRepliesComponent reviews={reviews}  setAiResponse={setIsAiresponse} selectedReviewsArray={selectedReviewsArray} setSelectedReviewsArray={setSelectedReviewsArray} />
  </TabsContent>
  <TabsContent  value="5-stars">
        <BulkRepliesComponent reviews={reviews?.filter(review => review.rating >= 5)}  setAiResponse={setIsAiresponse} selectedReviewsArray={selectedReviewsArray} setSelectedReviewsArray={setSelectedReviewsArray} />
  </TabsContent>
  <TabsContent  value="4-stars">
        <BulkRepliesComponent   setAiResponse={setIsAiresponse} selectedReviewsArray={selectedReviewsArray} setSelectedReviewsArray={setSelectedReviewsArray}  reviews={reviews?.filter(review => review.rating >= 4 && review.rating < 5)} />
    </TabsContent>
  <TabsContent  value="3-stars">
        <BulkRepliesComponent   setAiResponse={setIsAiresponse} selectedReviewsArray={selectedReviewsArray} setSelectedReviewsArray={setSelectedReviewsArray}  reviews={reviews?.filter(review => review.rating >= 3 && review.rating < 4)} />
    </TabsContent>
  <TabsContent  value="2-stars">
        <BulkRepliesComponent   setAiResponse={setIsAiresponse} selectedReviewsArray={selectedReviewsArray} setSelectedReviewsArray={setSelectedReviewsArray}  reviews={reviews?.filter(review => review.rating >= 2 && review.rating < 3)} />
    </TabsContent>
  <TabsContent  value="1-stars">
        <BulkRepliesComponent   setAiResponse={setIsAiresponse} selectedReviewsArray={selectedReviewsArray} setSelectedReviewsArray={setSelectedReviewsArray}  reviews={reviews?.filter(review => review.rating >= 1 && review.rating < 2)} />
    </TabsContent>
  
   
  
  
</Tabs>

        </>)
       }
        </div>
   
  )
};

export default BulkRepliesSection;
