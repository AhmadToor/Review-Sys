import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Logo from '@/assets/svg/DashboardLogo.svg?react'
import { Bell, CircleUserRound, Loader2, LogOut, MenuIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import dp from '@/assets/images/Avatar.png'
import { Button } from "@/components/ui/button"
import GoogleIcon from '@/assets/svg/GoogleIcon.svg?react'
import AttachBuisnessIcon from '@/assets/svg/DashboardAttachBuisnessIcon.svg?react'
import { useContext } from "react"
import { DropdownMenu, DropdownMenuContent,  DropdownMenuItem,  DropdownMenuSeparator,  DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ShowChildrenContext } from "@/App"
import { Link } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
interface DashboardWrapperProps {
  children: React.ReactNode
}

export function DashboardWrapper({ children }: DashboardWrapperProps) {
  const {handleLogout,handleLinkGoogleBuisnessAccount, isLoading} = useAuth()
  const {showChildren} = useContext(ShowChildrenContext)
  return (
    <>
      <header className="grid grid-col sm:grid-cols-[2fr_3fr] w-full absolute right-0  h-16 bg-header items-center  border-b px-4">
        <div className="flex items-center  w-full justify-between">
          <Logo className="ml-3 md:ml-0"/>
          <ul className="flex gap-6 mx-6 w-max text-xs text-gray-500 cursor-pointer">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex items-center w-full gap-4 justify-end">
          <span className="bg-white rounded-full p-2"><Bell height='16' width='16' /></span>
          <span className=" rounded-full h-8 w-8 ">
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Avatar className="h-8 w-8 border-gradient  cursor-pointer " >
              <AvatarImage src={dp} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 mr-2 rounded-xl">
      <DropdownMenuItem className="cursor-pointer"><Link to='/settings' className="flex gap-2 w-full"><CircleUserRound/> Profile</Link></DropdownMenuItem>
      <DropdownMenuSeparator/>
      <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}><LogOut/> Log out</DropdownMenuItem>
        
        
      </DropdownMenuContent>
    </DropdownMenu>
          </span>
        </div>
      </header>
      <SidebarProvider>
        <SidebarTrigger className="-ml-1 mt-4 z-[11] md:hidden" >
        <MenuIcon/>
        </SidebarTrigger>

        <AppSidebar className="absolute  top-16 h-sidebar-height" />
        <SidebarInset className="h-sidebar-height absolute top-16  right-0 w-full md:w-sidebar-inset-width overflow-y-auto">
          {showChildren ? 
          (
            <div className="bg-sidebarInset bg-fixed overflow-y-auto bg-right bg-no-repeat bg-contain h-full">
            {children}
            </div>
            
            
          ) :
            (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex items-center flex-col w-72">
                  <AttachBuisnessIcon />
                  <h3 className="font-bold mt-4 text-2xl text-center">Your Google Business
                    Profile is not linked yet.</h3>
                  <p className="text-center text-gray-500 text-sm my-4">Please register or connect your Google Business location to continue using our app and unlock its full features. Thank you!</p>
                  <Button onClick={handleLinkGoogleBuisnessAccount} className="w-full">
                    {isLoading?
                    (
                      <Loader2 className="animate-spin"/>
                    ):
                    <>
                    
                    <GoogleIcon /> Link Google Business Account
                    </>}
                    </Button>
                </div>
              </div>
            )
          }



        </SidebarInset>
      </SidebarProvider>
    </>
  )
}


































