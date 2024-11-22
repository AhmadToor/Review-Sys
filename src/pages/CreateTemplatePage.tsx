import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import CreateTemplateComponent from "@/components/createtemplate/createTemplateComponent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Folder } from "lucide-react";


const CreateTemplatePage = () => {
  return (
    <DashboardWrapper>
         <div className="w-full h-full p-6 overflow-y-auto">
         <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Create New Template</h1>
         <Breadcrumb>
  <BreadcrumbList className="text-xs mt-2">
    <BreadcrumbItem>
      <BreadcrumbLink to="/emailtemplates" className="flex items-center gap-1"><Folder className="w-3 h-3 "/> Email Template</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Create New Template</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

<CreateTemplateComponent/>

         </div>
    </DashboardWrapper>
  )
};

export default CreateTemplatePage;
