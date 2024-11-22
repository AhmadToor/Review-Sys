import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import React from "react"
import { NavLink } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: React.ReactNode
  }[]
}) {


  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
         
            <SidebarMenuItem>
              
               
                <NavLink 
              to={item.url} 
              className={({ isActive }) => 
               `hover:bg-primary flex gap-2 items-center w-full border-none text-black rounded-full hover:stroke-white stroke-black  text-sm px-2 py-1.5 text-left hover:text-white active:text-white hover:fill-white ${isActive ? 'bg-primary text-white fill-white stroke-white '  : ' '} `
              }
              >
             
                {item.icon}{item.title}
            </NavLink>
               
             
            </SidebarMenuItem>
         
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
