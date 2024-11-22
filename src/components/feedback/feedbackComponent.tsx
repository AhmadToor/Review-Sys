import { Card, CardContent, CardHeader } from "../ui/card";


const reviews = [
    {
        'title': "Review Our Business",
        'description': "Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....",
        'timestamp' : 'Sent 1 hour ago'
    },
    {
        'title': "Requesting Review",
        'description': "Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this. We are reaching out to see how we can improve this....",
        'timestamp' : 'Sent 1 hour ago'
    },
    {
        'title': "Review Our Business",
        'description': "Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this. We are reaching out to see how we can improve this....",
        'timestamp' : 'Sent 1 hour ago'
    },
    {
        'title': "Review Our Business",
        'description': "Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this....",
        'timestamp' : 'Sent 1 hour ago'
    },
    {
        'title': "Review Our Business",
        'description': "Hi [Customer Name], hope you are in good health. We are reaching out to see how we can improve this that bothers you and what can we do to help you better....",
        'timestamp' : 'Sent 1 hour ago'
    },
]

const FeedbackComponent = () => {
  return (
    <div className="grid grid-cols-[3fr_2fr] gap-3 mt-3">
      <div className="space-y-3">
       {reviews.map((review)=>{
        return(
            <Card className="p-3 border-none cursor-pointer">
            <CardContent className="p-0">
                <h1 className="text-sm font-semibold">{review.title}</h1>
                <p className="mt-2 text-xs">{review.description}</p>
                <hr className="my-2" />
                <p className="text-[10px] text-gray-500 ">{review.timestamp}</p>
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

                    <div className="flex gap-2 text-xs "><span className="text-gray-500">Subject:</span> <p className="font-semibold">Review Our Buisness</p></div>
                    <hr />

                </CardHeader>
                <CardContent className=" text-sm">

                    <p className="text-xs text-gray-500 mb-3 ">Body:</p>
                    <p>Hi [Customer Name], hope you are in good health.</p>
                    <br />
                    <p>We have an exciting update for you: there are now no fewer than 3 brand new places ready to rent in Lahore.</p>
                    <br />
                    <p>Are you curious about the available rental options in Lahore?</p>
                    <br />
                    <p>Interesting options have recently been added that seamlessly meet your wishes for your new stay. Do you see something that appeals to you? You have the option to arrange a viewing directly via the website or ask questions about the place in question. It’s now easier than ever to take your next step towards your ideal home.</p>
                    <br />
                    <p>Maan jao na yaaaar. Apni ki hui bakwas wapis lylo.</p>
                    <br />
                    <p>Thanks</p>


                </CardContent>
                
            </Card>
      </div>
    </div>
  )
};

export default FeedbackComponent;
