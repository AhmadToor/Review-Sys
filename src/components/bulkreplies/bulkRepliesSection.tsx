import { useState } from "react";
import { Button } from "../ui/button";
import BulkRepliesComponent from "./bulkRepliesComponent";
import BulkAiResponses from "./bulkAiResponses";


const BulkRepliesSection = () => {
  const [isAiResponse, setIsAiresponse] = useState(false)
  return (
    <div className="mt-6">
     
     
       {isAiResponse? <BulkAiResponses/>
       : (<>
        <h2 className="font-bold">46 Reviews Selected</h2>
        <p className="text-gray-500 my-1 text-xs">Click on card to unselect the reviews, you do not want to respond to. </p>
        <div className="flex justify-between items-center">
        <ul className="text-sm flex flex-row gap-4 bg-white rounded-full p-2 my-3 px-4 w-max">
        <li className="cursor-pointer rounded-full bg-primary text-white p-2">All</li>
        <li className="cursor-pointer rounded-full p-2 ">5.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2">4.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2">3.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2">2.0 Stars</li>
        <li className="cursor-pointer rounded-full p-2">1.0 Stars</li>
        </ul>
        <Button variant='outline' className="border-none bg-dashboardButton hover:text-black text-xs text-primary">Select All</Button>
        </div>
        <BulkRepliesComponent setAiResponse={setIsAiresponse}/></>)
       }
        </div>
   
  )
};

export default BulkRepliesSection;
