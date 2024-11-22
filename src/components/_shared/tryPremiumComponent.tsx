import { Button } from "../ui/button";
import PremiumIcon from '@/assets/svg/PremiumIcon.svg?react';
import SyncronizationIcon from '@/assets/svg/SynchronizationIcon.svg?react';
import SentimentIcon from '@/assets/svg/SmileIcon.svg?react'
import ExportIcon from '@/assets/svg/ExportIcon.svg?react'
import AiIcon from '@/assets/svg/Ai-icon.svg?react'
import { useNavigate } from "react-router-dom";

const PremiumFeatures = [
  {
    title: "Real-Time Data Synchronization",
    description: "Ensuring real-time synchronization of review data from Google Business makes it seamless to manage your business.",
    icon: <SyncronizationIcon />
  },
  {
    title: "AI-Generated Responses",
    description: "Generate AI based responses for bulk of the reviews on auto pilot and make it easy to manage your reviews.",
    icon: <AiIcon />
  },
  {
    title: "Sentiment Analysis",
    description: "Sentiment analysis to tailor responses based on the sentiment of the review (positive, neutral, negative).",
    icon: <SentimentIcon />
  },
  {
    title: "Export Data",
    description: "Sentiment analysis to tailor responses based on the sentiment of the review (positive, neutral, negative).",
    icon: <ExportIcon />
  }
];

const TryPremiumComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="my-auto">
      <Button variant='ghost' className="text-xs px-2 h-[32px]"><PremiumIcon />Try Premium</Button>
      <h1 className="text-xl mt-4 font-bold">Join <span className="bg-primary-gradient bg-clip-text text-fill">ReviewLore</span> and manage your reviews like a no brainer.</h1>
      <p className="text-[11px] my-2 text-center text-gray-500">Start your 30 days free trial and enjoy amazing features. You can cancel anytime.</p>
      <div className="flex flex-col gap-4 mt-12 mb-16">
        {PremiumFeatures.map((feature, index) => (
          <div key={index} className="flex flex-row gap-2">
            <div className="flex my-1 items-center bg-accent py-3 px-4 rounded-xl">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-base">{feature.title}</h3>
              <p className="text-[10px] text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="w-full" onClick={()=>{navigate('/verifyemail')}}>Start your 30 days free trial</Button>
      <p className="text-[11px] text-center my-4 text-gray-400">You will be charged $20 per google business. You can cancel anytime in the future.</p>
    </div>
  );
};

export default TryPremiumComponent;