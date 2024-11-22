import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import AiResponseSection from "@/components/airesponse/airesponsesection";


const AiResponsePage = () => {
  return (
    <DashboardWrapper>
      <div className="w-full h-full p-4 overflow-y-auto">
        <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Ai Response</h1>
        <div className="mt-3"></div>
          

        <AiResponseSection/>
        
      </div>
    </DashboardWrapper>
  )
};

export default AiResponsePage;
