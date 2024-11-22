import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import FeedbackComponent from "./feedbackComponent";


const FeedbackSection = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="flex justify-between items-center" >
      <div>
        <h1 className="text-sm font-bold"> Feedback </h1>
        <p className="text-xs text-gray-500 mt-1">Send an email to ask for a feedback.</p>
      </div>
      <div>
      <Button variant='outline' onClick={()=>{navigate('/feedback/createfeedback')}} className="border-none bg-dashboardButton hover:text-black text-xs text-primary">Create New Feedback <MoveUpRight /></Button>
      </div>
    </div>
    <FeedbackComponent/>
    </div>
  )
};

export default FeedbackSection;
