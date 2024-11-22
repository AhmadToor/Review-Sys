import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import { Check, ChevronsUpDown, Mail, Settings } from "lucide-react"
import NoBuisnessIcon from '@/assets/svg/NoBuisnessIcon.svg?react'
import DefaultBuisnessIcon from '@/assets/svg/DefaultBuisnessIcon.svg?react'
import DashboardIcon from '@/assets/svg/NavDashboardIcon.svg?react'
import AiResponseIcon from '@/assets/svg/NavAiReasponseIcon.svg?react'
import FeedbackIcon from '@/assets/svg/NavFeedbackIcon.svg?react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  setshowChildren? : (value: boolean) => void;
  showChildren? : boolean | undefined;
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const buisnessProfile =React.useContext(BuisnessProfileContext)
  const {showChildren, setShowChildren} = React.useContext(ShowChildrenContext)
 React.useEffect(()=>{
  if (buisnessProfile) {
    setValue(buisnessProfile)
  }
 }, [])
 console.log(buisnessProfile);
 
 
  
  React.useEffect(()=>{
    if (value) {
      localStorage.setItem('attachedBuisness', value)
    }
  }, [value])
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="mt-2">
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
                {value ? (
                  <div className="flex gap-2 items-center">
                    <DefaultBuisnessIcon />
                    {data.buisness.find((buisness) => buisness.value === value)?.label  }
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
                          setValue(currentValue === value ? "" : currentValue)
                          {currentValue === value  ? setShowChildren(false) : setShowChildren(true)}
                          {currentValue == buisnessProfile? localStorage.removeItem('attachedBuisness') : localStorage.setItem('attachedBuisness', (currentValue))}
                          
                          setOpen(false)
                        }}
                      >
                        <DefaultBuisnessIcon />{buisness.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === buisness.value ? "opacity-100" : "opacity-0"
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
