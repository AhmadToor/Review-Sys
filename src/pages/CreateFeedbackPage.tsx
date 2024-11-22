import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import CreateFeedbackComponent from "@/components/createfeedback/createFeedbackComponent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Folder } from "lucide-react";


const CreateFeedbackPage = () => {
  return (
    <DashboardWrapper>
         <div className="w-full h-full p-6 overflow-y-auto">
         <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Create New Feedback</h1>
         <Breadcrumb>
  <BreadcrumbList className="text-xs mt-2">
    <BreadcrumbItem>
      <BreadcrumbLink to="/feedback" className="flex items-center gap-1"><Folder className="w-3 h-3 "/> Feedback</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Create New Feedback</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

<CreateFeedbackComponent/>

         </div>
    </DashboardWrapper>
  )
};

export default CreateFeedbackPage;
