import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import UpgradeProSection from "@/components/settings/upgradeProSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Folder } from "lucide-react";

const UpgradeProPage = () => {
  return (
    <DashboardWrapper>
         <div className="w-full h-full p-8 overflow-y-auto">
         <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Settings</h1>
         <Breadcrumb>
  <BreadcrumbList className="text-xs mt-2">
    <BreadcrumbItem>
      <BreadcrumbLink to="/settings" className="flex items-center gap-1"><Folder className="w-3 h-3 "/> Settings</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Upgrade to Pro</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>


<UpgradeProSection/>
         </div>
    </DashboardWrapper>
  )
};

export default UpgradeProPage;
