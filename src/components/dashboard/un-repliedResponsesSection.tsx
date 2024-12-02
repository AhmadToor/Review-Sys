
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import ReviewComponent from "./reviewComponent";
import { useNavigate } from "react-router-dom";
import { reviews } from "@/data/unRepliedReviews";


const UnRepliedRespones = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="flex justify-between">
        <div>
        <h2 className="font-bold">Un-Replied Reviews</h2>
        <p className="text-gray-500 text-xs">Responding to the reviews early makes an impact. </p>
        </div>
       {reviews.length > 0 && (
         <Button variant='outline' onClick={()=>{navigate('bulkreplies')}} className="border-none bg-dashboardButton hover:text-black text-xs text-primary">
         Generate Bulk Replies
         <MoveUpRight  />
         </Button>
       )}

        </div>

        <ReviewComponent reviews={reviews}/>
    </div>
  )
};

export default UnRepliedRespones;
