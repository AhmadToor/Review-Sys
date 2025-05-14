import { SigninSchemaTypes } from "@/types/authtypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinschema } from "@/schema/authSchema";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "@/services/authServices";
import { BuisnessProfileContext } from "@/App";
import { useContext } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth as useAuthContext } from "@/context/AuthContext";

export const useSignIn = () => {
  const { setBuisnessProfile } = useContext(BuisnessProfileContext);
  const { toast } = useToast();
  const auth = useAuthContext();

  const { register, handleSubmit, formState } = useForm<SigninSchemaTypes>({
    resolver: zodResolver(signinschema),
    mode: "onSubmit",
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: async (values: SigninSchemaTypes) => {
      const response = await loginRequest(values);
      return response;
    },
    onSuccess: (data) => {
      const { token, attachedBuisness, ...user } = data;
      localStorage.setItem("accessToken", JSON.stringify(token));
      localStorage.setItem("attachedBuisness", attachedBuisness);
      localStorage.setItem("user", JSON.stringify(user));
      setBuisnessProfile(attachedBuisness);

      if (auth && auth.login) {
        auth.login(token, user, attachedBuisness);
      }

      toast({
        title: "Success",
        description: "Signed in successfully",
      });

      navigate("/");
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "Failed to sign in",
      });
      return err;
    },
  });

  const handleLogin: SubmitHandler<SigninSchemaTypes> = (values) => {
    mutation.mutate(values);
  };

  const errors = formState.errors;
  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const loginError = mutation.error?.message;

  return {
    handleSubmit,
    register,
    handleLogin,
    emailError,
    passwordError,
    loginError,
    isLoading: mutation.isPending,
  };
};
