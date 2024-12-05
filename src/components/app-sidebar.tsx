import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import { Check, ChevronsUpDown, Mail, Settings, SidebarClose, X } from "lucide-react"
import NoBuisnessIcon from '@/assets/svg/NoBuisnessIcon.svg?react'
import DefaultBuisnessIcon from '@/assets/svg/DefaultBuisnessIcon.svg?react'
import DashboardIcon from '@/assets/svg/NavDashboardIcon.svg?react'
import AiResponseIcon from '@/assets/svg/NavAiReasponseIcon.svg?react'
import FeedbackIcon from '@/assets/svg/NavFeedbackIcon.svg?react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Logo from '@/assets/svg/DashboardLogo.svg?react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BuisnessProfileContext, ShowChildrenContext } from "@/App"


const data = {
  buisness: [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <DashboardIcon/>
      
    },
    {
      title: "Ai Responses",
      url: "/airesponses",
      icon: <AiResponseIcon/>
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings width="16" height="16"/>
    },
    {
      title: "Email Templates",
      url: "/emailtemplates",
      icon : <Mail width="16" height="16"/>
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: <FeedbackIcon/>
    },
  ],
}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [open, setOpen] = React.useState(false)
  const {buisnessProfile, setBuisnessProfile} =React.useContext(BuisnessProfileContext)
  const {showChildren, setShowChildren} = React.useContext(ShowChildrenContext)
 

 
 
  
  React.useEffect(()=>{
    if (buisnessProfile) {
      localStorage.setItem('attachedBuisness', buisnessProfile)
    }
  }, [buisnessProfile])
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="mt-2 flex flex-col">
          <div className="flex justify-between items-between md:hidden"><Logo /> <SidebarTrigger><X/></SidebarTrigger></div>
          <hr className="w-full my-4 md:hidden  " />
          <h3 className="text-xs text-black">Switch Business Profiles</h3>
          <p className="text-gray-500 text-[10px]">Switch your business profile to manage them easily.</p>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full mt-3 border-none text-black justify-between"
              >
                {showChildren ? (
                  <div className="flex gap-2 items-center">
                    <DefaultBuisnessIcon />
                    {data.buisness.find((buisness) => buisness.value === buisnessProfile)?.label  }
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <NoBuisnessIcon /> No Business Attached
                  </div>
                )}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search Buisness..." />
                <CommandList>
                  <CommandEmpty>No Buisness found.</CommandEmpty>
                  <CommandGroup>
                    {data.buisness.map((buisness) => (
                      <CommandItem
                        key={buisness.value}
                        value={buisness.value}
                        onSelect={(currentValue) => {
                          setBuisnessProfile(currentValue === buisnessProfile ? "" : currentValue)
                          {currentValue === buisnessProfile  ? setShowChildren(false) : setShowChildren(true)}
                          {currentValue == buisnessProfile? localStorage.removeItem('attachedBuisness') : localStorage.setItem('attachedBuisness', (currentValue))}
                          
                          setOpen(false)
                        }}
                      >
                        <DefaultBuisnessIcon />{buisness.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            buisnessProfile === buisness.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Separator className="mt-4" />
        </div>
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {!showChildren && (<div className="p-1">
          <SidebarOptInForm />
        </div>)}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
