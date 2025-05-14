import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { linkGoogleBuisnessAccountRequest } from "@/services/authServices";
import { useContext } from "react";
import { BuisnessProfileContext } from "@/App";
import { AuthContextType } from "@/types/authtypes";
import { useAuth as useAuthContext } from "@/context/AuthContext";

export const useAuth = () => {
  const { setBuisnessProfile } = useContext(BuisnessProfileContext);
  const [passwordType, setPasswordType] = useState("password");
  const [oldPasswordType, setOldPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const navigate = useNavigate();
  const { toast } = useToast();
  const auth = useAuthContext() as AuthContextType;

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };

  const toggleOldPasswordVisibility = () => {
    setOldPasswordType((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };

  const handleLogout = async () => {
    localStorage.clear();
    setBuisnessProfile(null);
    if (auth && auth.logout) {
      auth.logout();
    }
    navigate("/signin");
  };

  const linkGoogleBuisness = useMutation({
    mutationKey: ["attach-buisness"],
    mutationFn: async () => {
      const response = await linkGoogleBuisnessAccountRequest();
      return response;
    },
    onSuccess: (data) => {
      localStorage.setItem("attachedBuisness", "next.js");
      setBuisnessProfile(data.buisness);
      navigate("/dashboard");
      window.open(data.url, "_blank");
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Failed to link Google Business account. Please try again.",
      });
      return err;
    },
  });

  const handleLinkGoogleBuisnessAccount = () => {
    linkGoogleBuisness.mutate();
  };

  return {
    passwordType,
    confirmPasswordType,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleLogout,
    oldPasswordType,
    isLoading: linkGoogleBuisness.isPending,
    toggleOldPasswordVisibility,
    handleLinkGoogleBuisnessAccount,
  };
};
