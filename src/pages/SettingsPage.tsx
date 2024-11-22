import { DashboardWrapper } from "@/_layouts/DashboardWrapper";
import SettingsComponent from "@/components/settings/settingsComponent";


const SettingsPage = () => {
  return (
    <DashboardWrapper>
      <div className="w-full h-full p-6 px-8 overflow-y-auto">
        <h1 className='text-2xl  text-start w-fit  font-bold bg-secondary-gradient bg-clip-text text-fill'>Settings</h1>
      <div className="mt-3"></div>
          

        <SettingsComponent/>
        
      </div>
    </DashboardWrapper>
  )
};

export default SettingsPage;
