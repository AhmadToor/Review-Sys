import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import SignInPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import TryPremiumPage from "./pages/TryPremiumPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import AttachBuisnessPage from "./pages/AttachBuisnessPage";
import DashboardPage from "./pages/DashboardPage";
import EmailResponsePage from "./pages/EmailResponsePage";
import BulkRepliesPage from "./pages/BulkRepliesPage";
import AiResponsePage from "./pages/AiResponsePage";
import SettingsPage from "./pages/SettingsPage";
import UpgradeProPage from "./pages/UpgradeProPage";
import EmailTemplatePage from "./pages/EmailTemplatePage";
import CreateTemplatePage from "./pages/CreateTemplatePage";
import FeedbackPage from "./pages/FeedbackPage";
import CreateFeedbackPage from "./pages/CreateFeedbackPage";
import { createContext, useEffect, useState } from "react";
import routes from "tempo-routes";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./context/AuthContext";
import { BusinessProvider } from "./context/BusinessContext";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/auth/PrivateRoute";

type ShowChildrenContextType = {
  showChildren: boolean;
  setShowChildren: React.Dispatch<React.SetStateAction<boolean>>;
};
type BuisnessProfileContextType = {
  buisnessProfile: string | null;
  setBuisnessProfile: React.Dispatch<React.SetStateAction<string | null>>;
};

const LSbuisnessProfile = localStorage.getItem("attachedBuisness");
const BuisnessProfileContext = createContext<BuisnessProfileContextType>({
  buisnessProfile: LSbuisnessProfile ? LSbuisnessProfile : null,
  setBuisnessProfile: () => {},
});
const ShowChildrenContext = createContext<ShowChildrenContextType>({
  showChildren: false,
  setShowChildren: () => {},
});

// Tempo Routes Component to properly use the useRoutes hook within Router context
function TempoRoutes() {
  // Only use routes when in Tempo environment
  return import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;
}

function App() {
  const [showChildren, setShowChildren] = useState(false);
  const [buisnessProfile, setBuisnessProfile] = useState(LSbuisnessProfile);

  useEffect(() => {
    if (buisnessProfile) {
      setShowChildren(true);
    } else {
      setShowChildren(false);
    }
  }, [buisnessProfile]);

  const showChildrenvalue = { showChildren, setShowChildren };
  const buisnessProfileValue = { buisnessProfile, setBuisnessProfile };

  return (
    <BuisnessProfileContext.Provider value={buisnessProfileValue}>
      <ShowChildrenContext.Provider value={showChildrenvalue}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <AuthProvider>
            <BusinessProvider>
              <SubscriptionProvider>
                {/* Tempo routes - only enabled in Tempo environment */}
                {import.meta.env.VITE_TEMPO === "true" && <TempoRoutes />}

                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                  />
                  <Route
                    path="/reset-password/:token"
                    element={<ResetPasswordPage />}
                  />

                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <DashboardPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/dashboard/emailresponse/:reviewId"
                    element={
                      <PrivateRoute>
                        <EmailResponsePage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/dashboard/bulkreplies"
                    element={
                      <PrivateRoute>
                        <BulkRepliesPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/settings/upgrade"
                    element={
                      <PrivateRoute>
                        <UpgradeProPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/airesponses"
                    element={
                      <PrivateRoute>
                        <AiResponsePage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <PrivateRoute>
                        <SettingsPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/emailtemplates"
                    element={
                      <PrivateRoute>
                        <EmailTemplatePage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/emailtemplates/createtemplate"
                    element={
                      <PrivateRoute>
                        <CreateTemplatePage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/feedback"
                    element={
                      <PrivateRoute>
                        <FeedbackPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/feedback/createfeedback"
                    element={
                      <PrivateRoute>
                        <CreateFeedbackPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/trypremium"
                    element={
                      <PrivateRoute>
                        <TryPremiumPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/verifyemail"
                    element={
                      <PrivateRoute>
                        <VerifyEmailPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/attachbuisness"
                    element={
                      <PrivateRoute>
                        <AttachBuisnessPage />
                      </PrivateRoute>
                    }
                  />

                  {/* Add this before any catchall route - only enabled in Tempo environment */}
                  {import.meta.env.VITE_TEMPO === "true" && (
                    <Route path="/tempobook/*" />
                  )}

                  {/* 404 route */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>

                <Toaster />
              </SubscriptionProvider>
            </BusinessProvider>
          </AuthProvider>
        </BrowserRouter>
      </ShowChildrenContext.Provider>
    </BuisnessProfileContext.Provider>
  );
}

export default App;
export { BuisnessProfileContext };
export { ShowChildrenContext };
