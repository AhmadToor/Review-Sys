import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SettingsGeneralTab = () => {
  const [dp, setDp] = useState('https://github.com/shadcn.png');
  return (
    <div className="grid grid-cols-[3fr_5fr] gap-3">
      <Card className="border-none rounded-xl p-5">
        <CardContent className="p-0">
          <div className="w-full flex justify-end">
            <Badge className="bg-green-100 text-green-600 text-[10px] rounded-full p-1 px-3">Active</Badge>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar className="h-8 w-8 cursor-pointer mb-6 h-36 w-36">
              <AvatarImage src={dp} alt="Avatar" />
            </Avatar>
            <Input
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              className="border-none bg-gray-200 rounded-full cursor-pointer hover:text-black text-sm w-min text-black"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) { 
                  const file = files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setDp(reader.result as string); 
                  };
                  reader.readAsDataURL(file); 
                }
              }}
            />
            <p className="text-gray-500 text-sm text-center my-2">Allowed *.jpeg, *.jpg, *.png max size of 5 Mb</p>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none rounded-xl p-3 relative">
        <CardHeader className="p-0 pt-1">
          <h1 className="font-semibold">User  Details</h1>
        </CardHeader>
        <CardContent className="p-0 mt-3">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                autoComplete="fullname"
                placeholder="Loashe Maoshe"
                className="rounded-lg border-none"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-baseline relative">
                <Input id="email" className="rounded-lg border-none" autoComplete="email" placeholder="xyz@emaple.com" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="mt-2 flex gap-2 justify-end absolute bottom-3 right-3 flex-col left-3">
            <hr />
            <div className="justify-end flex gap-2">
              <Button variant='outline' className="border-none bg-gray-200 hover:text-black text-sm">Cancel</Button>
              <Button className="bg-primary text-sm">Save</Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
};

export default SettingsGeneralTab;