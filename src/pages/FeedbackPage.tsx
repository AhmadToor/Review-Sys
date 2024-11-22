import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import FeedbackSection from "@/components/feedback/feedbackSection";


const FeedbackPage = () => {
  return (
   <DashboardWrapper>
    <div className="w-full h-full p-6 px-8 overflow-y-auto">
        <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Feedback</h1>
      <div className="mt-3"></div>
      
      <FeedbackSection/>
      
      </div>
   </DashboardWrapper>
  )
};

export default FeedbackPage;
