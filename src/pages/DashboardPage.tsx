import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import { Card, CardContent } from "@/components/ui/card";
import Smile  from "@/assets/svg/SmileIcon White.svg?react";
import UnRepliedRespones from "@/components/dashboard/un-repliedResponsesSection";
const dashboardData = [
  {
    title : 'Overall Ratings',
    content : '4.0',
    background: 'bg-dashboard1'

  },
  {
    title : 'Overall Sentiments',
    content : <Smile className="h-10 w-10" /> ,
    background : 'bg-primary text-white'
  },
  {
    title : 'Overall Reviews',
    content : '240',
    background: 'bg-dashboard2'
  },
  {
    title : 'Negative Reviews',
    content : '100',
    background: 'bg-dashboard3 bg-opacity-20 inset-0 '
  },
]

const DashboardPage = () => {
  return (
    <DashboardWrapper>
      <div className="w-full h-full p-4 overflow-y-auto">
        <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Dashboard</h1>
        <div className="grid grid-cols-2 min-[1320px]:grid-cols-4 my-4 justify-center gap-6  ">
        {
          dashboardData.map((data, index)=>{
            return (
              <Card key={index} className="rounded-3xl  h-44 min-w-64 pt-3 px-2 border-none pb-8">
            <CardContent className="pb-2 px-1  w-full h-full">
              <div className={`items-center flex justify-center  rounded-3xl text-3xl w-full h-full font-bold ${data.background}`}>{data.content}</div>
              <h3 className="text-center my-2">{data.title}</h3>
            </CardContent>
          </Card>
            )
          })
        }
        </div>
          

        <UnRepliedRespones/>
        
      </div>
    </DashboardWrapper>
  )
};

export default DashboardPage;
