import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface SideBarProps {
    placeholder: string,
    className? : string
}

const SideBar = ({ placeholder, className }: SideBarProps) => {
    return(
        <div className={`flex items-center relative ${className}`}>
            <Search className="w-4 h-4 text-gray-500 absolute left-2" />
            <Input 
        className="rounded-full bg-dashboardButton border-none text-xs pl-7 "
        placeholder={placeholder}
        />
        </div>
    )
}

export default SideBar;