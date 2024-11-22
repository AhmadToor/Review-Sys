import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import EmailTemplateSection from "@/components/emailtemplate/emailTemplateSection";


const EmailTemplatePage = () => {
  return (
   <DashboardWrapper>
    <div className="w-full h-full p-6 px-8 overflow-y-auto">
        <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Email Template</h1>
      <div className="mt-3"></div>
      
      <EmailTemplateSection/>
      
      </div>
   </DashboardWrapper>
  )
};

export default EmailTemplatePage;
