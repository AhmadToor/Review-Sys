import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SignInPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import TryPremiumPage from "./pages/TryPremiumPage"
import VerifyEmailPage from "./pages/VerifyEmailPage"
import AttachBuisnessPage from "./pages/AttachBuisnessPage"
import DashboardPage from "./pages/DashboardPage"
import EmailResponsePage from "./pages/EmailResponsePage"
import BulkRepliesPage from "./pages/BulkRepliesPage"
import AiResponsePage from "./pages/AiResponsePage"
import SettingsPage from "./pages/SettingsPage"
import UpgradeProPage from "./pages/UpgradeProPage"
import EmailTemplatePage from "./pages/EmailTemplatePage"
import CreateTemplatePage from "./pages/CreateTemplatePage"
import FeedbackPage from "./pages/FeedbackPage"
import CreateFeedbackPage from "./pages/CreateFeedbackPage"
import { createContext, useEffect, useState } from "react"


  
type ShowChildrenContextType = {
  showChildren: boolean;
  setShowChildren: React.Dispatch<React.SetStateAction<boolean>>;
};
type BuisnessProfileContextType = {
  buisnessProfile: string | null;
  setBuisnessProfile: React.Dispatch<React.SetStateAction<string | null>>;
};

const LSbuisnessProfile = localStorage.getItem('attachedBuisness');
const BuisnessProfileContext = createContext<BuisnessProfileContextType>({
  buisnessProfile: LSbuisnessProfile ? LSbuisnessProfile : null,
  setBuisnessProfile: () => { },
});
const ShowChildrenContext = createContext<ShowChildrenContextType>({
  showChildren: false,
  setShowChildren: () => { } 
});

function App() {
  const [showChildren, setShowChildren] = useState(false)
  const [buisnessProfile, setBuisnessProfile] = useState(LSbuisnessProfile)
  useEffect(()=>{
    if(buisnessProfile){
      setShowChildren(true)
    }else{
      setShowChildren(false)
    }
  },[buisnessProfile])


  
  
  const showChildrenvalue = {showChildren, setShowChildren}
  const buisnessProfileValue = {buisnessProfile, setBuisnessProfile}
  
   const Navigator = ()=>{
    return  <Navigate to='/dashboard'/>  
   }
  return (
    <BuisnessProfileContext.Provider value={buisnessProfileValue}>
      <ShowChildrenContext.Provider value={showChildrenvalue}>
    <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
    <Routes>
      <Route path="/" element={<Navigator />} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/dashboard/emailresponse" element={<EmailResponsePage/>} />
      <Route path="/dashboard/bulkreplies" element={<BulkRepliesPage/>} />
      <Route path="/settings/upgrade" element={<UpgradeProPage/>} />
      <Route path="/airesponses" element={<AiResponsePage/>} />
      <Route path="/settings" element={<SettingsPage/>} />
      <Route path="/emailtemplates" element={<EmailTemplatePage/>} />
      <Route path="/emailtemplates/createtemplate" element={<CreateTemplatePage/>} />
      <Route path="/feedback" element={<FeedbackPage/>} />
      <Route path="/feedback/createfeedback" element={<CreateFeedbackPage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/trypremium" element={<TryPremiumPage/>} />
      <Route path="/verifyemail" element={<VerifyEmailPage/>} />
      <Route path="/attachbuisness" element={<AttachBuisnessPage/>} />
    </Routes>
    </BrowserRouter>
    </ShowChildrenContext.Provider >
    </BuisnessProfileContext.Provider>
  )
}

export default App
export { BuisnessProfileContext };
export { ShowChildrenContext };  