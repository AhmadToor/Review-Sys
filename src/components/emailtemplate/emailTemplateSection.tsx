import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import EmailTemplateComponent from "./emailTemplateComponent";
import { useNavigate } from "react-router-dom";
import SearchBar from "../_shared/searchBar";


const EmailTemplateSection = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="flex justify-between items-center" >
      <div>
        <h1 className="text-sm font-bold"> My Templates </h1>
        <p className="text-xs text-gray-500 mt-1">Create your templates and use them often.</p>
      </div>
      <div className="flex gap-1">
        <SearchBar placeholder="Search templates" />
      <Button variant='outline' onClick={()=>{navigate('/emailtemplates/createtemplate')}} className="border-none bg-dashboardButton hover:text-black text-xs text-primary">Create New Template <MoveUpRight /></Button>
      </div>
    </div>
    <EmailTemplateComponent/>

    </div>
  )
};

export default EmailTemplateSection;
