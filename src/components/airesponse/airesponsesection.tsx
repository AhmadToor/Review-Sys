
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReviewComponent from "../dashboard/reviewComponent";
import SearchBar from "../_shared/searchBar";
import { reviews } from "@/data/unRepliedReviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const AiResponseSection = () => {
  const navigate = useNavigate()
  return (
    <div>
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
          <SearchBar placeholder="Search Ai Responses" className="hidden lg:flex" />
          <Button variant='outline' onClick={()=>{navigate('/dashboard/bulkreplies')}} className="border-none bg-dashboardButton hover:text-black text-xs text-primary">
          Generate Bulk Replies
          <MoveUpRight  />
          </Button>
          </div>
        )}
</div>
  <TabsContent  value="all">
        <ReviewComponent reviews={reviews} />
    </TabsContent>
  <TabsContent  value="5-stars">
        <ReviewComponent reviews={reviews?.filter(review => review.rating >= 5)} />
    </TabsContent>
  <TabsContent  value="4-stars">
        <ReviewComponent reviews={reviews?.filter(review => review.rating >= 4 && review.rating < 5)} />
    </TabsContent>
  <TabsContent  value="3-stars">
        <ReviewComponent reviews={reviews?.filter(review => review.rating >= 3 && review.rating < 4)} />
    </TabsContent>
  <TabsContent  value="2-stars">
        <ReviewComponent reviews={reviews?.filter(review => review.rating >= 2 && review.rating < 3)} />
    </TabsContent>
  <TabsContent  value="1-stars">
        <ReviewComponent reviews={reviews?.filter(review => review.rating >= 1 && review.rating < 2)} />
    </TabsContent>
   
  
  
</Tabs>

    </div>
  )
};

export default AiResponseSection;
