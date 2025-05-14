import { resetPasswordSchema } from "@/schema/authSchema";
import { resetPasswordRequest } from "@/services/authServices";
import { ResetPasswordSchemaTypes } from "@/types/authtypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useChangePassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: async (values: ResetPasswordSchemaTypes) => {
      const response = await resetPasswordRequest(values);
      return response;
    },
    onSuccess: (data) => {
      localStorage.removeItem("accessToken");
      toast({
        title: "Success",
        description: data.message || "Password reset successfully",
      });
      navigate("/signin", { state: { popup: data.message } });
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "Failed to reset password",
      });
      return err.message;
    },
  });

  const { handleSubmit, register, formState, reset } =
    useForm<ResetPasswordSchemaTypes>({
      resolver: zodResolver(resetPasswordSchema),
      mode: "onSubmit",
    });

  const handleResetPassword: SubmitHandler<ResetPasswordSchemaTypes> = (
    values,
  ) => {
    const userToken = localStorage.getItem("accessToken") as string;
    const payload = {
      userToken: JSON.parse(userToken),
      oldpassword: values.oldpassword,
      newpassword: values.newpassword,
      confirmPassword: values.confirmPassword,
    };
    mutation.mutate(payload);
  };

  const errors = {
    confirmPasswordError: formState.errors.confirmPassword?.message,
    oldpasswordError: formState.errors.oldpassword?.message,
    newPasswordError: formState.errors.newpassword?.message,
    serverError: mutation.error?.message,
  };

  return {
    handleSubmit,
    register,
    handleResetPassword,
    errors,
    reset,
    isLoading: mutation.isPending,
  };
};
