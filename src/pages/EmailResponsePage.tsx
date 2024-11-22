import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import EmailResposeSection from "@/components/emailresponse/emailresponsesection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Folder } from "lucide-react";


const EmailResponsePage = () => {
  return (
    <DashboardWrapper>
         <div className="w-full h-full p-6 overflow-y-auto">
         <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Email Response</h1>
         <Breadcrumb>
  <BreadcrumbList className="text-xs mt-2">
    <BreadcrumbItem>
      <BreadcrumbLink to="/dashboard" className="flex items-center gap-1"><Folder className="w-3 h-3 "/> Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Email Response</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

<EmailResposeSection/>

         </div>
    </DashboardWrapper>
  )
};

export default EmailResponsePage;
