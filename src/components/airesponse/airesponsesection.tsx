
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReviewComponent from "../dashboard/reviewComponent";
import SearchBar from "../_shared/searchBar";
import { reviews } from "@/data/unRepliedReviews";

const AiResponseSection = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="flex justify-between items-center">
        <ul className="text-xs lg:text-sm flex flex-row gap-4 bg-white rounded-full p-2 my-3 px-4 w-max">
        <li className="cursor-pointer rounded-full bg-primary text-white p-2 ">All</li>
        <li className="cursor-pointer rounded-full p-2 w-max ">Un Replied</li>
        <li className="cursor-pointer rounded-full p-2  w-max ">5.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2 w-max">4.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2 w-max">3.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2 w-max">2.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2 w-max">1.0 Stars</li>
        </ul>
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

        <ReviewComponent/>
    </div>
  )
};

export default AiResponseSection;
