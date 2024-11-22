import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
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

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userinfo');
    navigate('/signin');
  };

  return {
    passwordType,
    confirmPasswordType,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleLogout,
    oldPasswordType,
    toggleOldPasswordVisibility
  };
};