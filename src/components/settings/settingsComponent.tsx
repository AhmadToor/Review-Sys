import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsGeneralTab from "./settingsGeneralTab";
import SettingsSwitchBuisnessTab from "./settingsSwitchBuisnesstab";
import SettingsBillingTab from "./settingsBillingTab";
import SettingsSecurityTab from "./settingsSecurityTab";
import SettingsNotificationTab from "./settingsNotificatonTab";

const SettingsComponent = () => {
  return (
    <Tabs defaultValue="general" className="">
  <TabsList className="text-sm flex flex-row gap-4 bg-white rounded-full p-7 my-3 px-4  w-max">
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="general">General</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="switchbuisness">Switch Business Profile</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="billing">Billing</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="security">Security</TabsTrigger>
    <TabsTrigger className="cursor-pointer rounded-full p-2 px-3 text-gray-600 font-semibold" value="notification">Notification</TabsTrigger>
</TabsList>
  <TabsContent value="general">
    <SettingsGeneralTab/>
    </TabsContent>
  <TabsContent value="switchbuisness">
    <SettingsSwitchBuisnessTab/>
    </TabsContent>
  <TabsContent value="billing">
    <SettingsBillingTab/>
    </TabsContent>
  <TabsContent value="security">
    <SettingsSecurityTab/>
    </TabsContent>
  <TabsContent value="notification">
    <SettingsNotificationTab/>
    </TabsContent>
  
</Tabs>

  )
};

export default SettingsComponent;

