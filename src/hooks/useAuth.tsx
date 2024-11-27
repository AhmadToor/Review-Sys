import { BuisnessProfileContext } from "@/App";
import { linkGoogleBuisnessAccountRequest } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const {setBuisnessProfile} = useContext(BuisnessProfileContext)
  const [passwordType, setPasswordType] = useState('password');
  const [oldPasswordType, setOldPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };
  const toggleOldPasswordVisibility = () => {
    setOldPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  const handleLogout =  async () => {
    localStorage.clear()
    setBuisnessProfile(null)
    navigate('/signin');
  };


  const linkGoogleBuisness = useMutation({
    mutationKey : ['attach-buisness'],
    mutationFn: async () => {
        const response = await linkGoogleBuisnessAccountRequest()
        return response
    },
onSuccess : (data)=>{
  localStorage.setItem('attachedBuisness', 'next.js')
  setBuisnessProfile(data.buisness)
  navigate('/dashboard')
  window.open(data.url, '_blank') 
},
onError : (err)=>{
    return err
}})
const handleLinkGoogleBuisnessAccount = ()=>{
    linkGoogleBuisness.mutate()
}
  return {
    passwordType,
    confirmPasswordType,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleLogout,
    oldPasswordType,
    isLoading : linkGoogleBuisness.isPending,
    toggleOldPasswordVisibility,
    handleLinkGoogleBuisnessAccount
  };
};