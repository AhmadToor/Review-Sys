import { feedback } from "@/data/feedbackTemplatesData";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";



const FeedbackComponent = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(feedback[0])
  return (
    <div className="grid grid-cols-[3fr_2fr] gap-3 mt-3">
      <div className="space-y-3">
       {feedback.map((feedback , index)=>{
        return(
            <Card onClick={()=>{setSelectedTemplate(feedback)}} key={index} className="p-3 border-none cursor-pointer">
            <CardContent className="p-0">
                <h1 className="text-sm font-semibold">{feedback.title}</h1>
                <p className="mt-2 text-xs">{`${feedback.description.slice(0,150)}...`}</p>
                <hr className="my-2" />
                <p className="text-[10px] text-gray-500 ">{feedback.timestamp}</p>
            </CardContent>
            </Card>
        )
       })}
      </div>

      <div>
      <Card className="border-none rounded-xl pb-20 h-full  relative">
                <CardHeader className="space-y-2 pb-2">
                    <h2 className="font-bold ">View Details</h2>

                    <hr />
                    <div className="flex gap-2 text-xs "><span className="text-gray-500">To:</span> <p className="font-semibold"> laoshe.found@gmail.com</p></div>

                    <hr />

                    <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p className="font-semibold">{selectedTemplate.title}</p></div>
                    <hr />

                </CardHeader>
                <CardContent className=" text-sm">

                    <p className="text-xs text-gray-500 mb-3 ">Body:</p>
                    <div dangerouslySetInnerHTML={{ __html: selectedTemplate.description.replace(/(?:\r\n|\r|\n)/g, '<br />') }}/>


                </CardContent>
                
            </Card>
      </div>
    </div>
  )
};

export default FeedbackComponent;
