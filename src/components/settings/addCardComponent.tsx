import { Button } from "../ui/button";


const AddCardComponent = () => {
    return (
       
            <>
                
                <div className="">
                    <h2 className="text-xl font-semibold mb-1">Add New Card</h2>
                    <p className="text-gray-500 text-sm">
                        Start your 30 days free trial and enjoy amazing features. You can cancel anytime.
                    </p>
                </div>

            
                <form className="mt-0 space-y-4">
                 
                    <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                 
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-1/2 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Security Code"
                            className="w-1/2 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="w-1/2 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <select
                            className="w-1/2 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            defaultValue="Pakistan"
                        >
                            <option value="Pakistan">Pakistan</option>
                            <option value="New Zealand">New Zealand</option>
                          
                        </select>
                    </div>

           
                    <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Apt, suite, etc. (optional)"
                        className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

          
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Suburb"
                            className="w-1/2 p-3 border border-gray-300  bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="w-1/2 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

        
                    <input
                        type="text"
                        placeholder="Postal Code"
                        className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />


                    <Button type="submit" className="w-full">Save Card</Button>
                </form>
            </>
      
    );
};

export default AddCardComponent;
