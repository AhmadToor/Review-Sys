import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import EmailResposeComponent from "./emailresponseComponent";
import { useNavigate } from "react-router-dom";


const EmailResposeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="flex flex-col">
        <h1 className="font-bold ">Respond with Email</h1>
        <p className="text-sm text-gray-500">Responding to the reviews early makes an impact. </p>
        </div>
        <Button onClick={()=>{navigate('/emailtemplates/createtemplate')}} variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs text-primary">Create New Template <MoveUpRight /></Button>
      </div>
      <EmailResposeComponent/>
    </div>
  )
};

export default EmailResposeSection;
