import { emailTemplateSchema } from "@/schema/emailTemplateSchema";
import { createTemplateRequest } from "@/services/emailTemplateServices";
import { EmailTemplateType } from "@/types/dashboardtypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useCreateEmailTemplate = () => {
  const { register, handleSubmit, formState } = useForm<EmailTemplateType>({
    resolver: zodResolver(emailTemplateSchema),
    mode: "onSubmit",
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const createMutation = useMutation({
    mutationKey: ["create-email-template"],
    mutationFn: async (values: EmailTemplateType) => {
      const response = await createTemplateRequest(values);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Email template created successfully",
      });
      navigate("/emailtemplates");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to create template",
      });
      return error;
    },
  });

  const handleCreateEmailTemplate: SubmitHandler<EmailTemplateType> = (
    values,
  ) => {
    const userToken = localStorage.getItem("accessToken") as string;
    const payload: EmailTemplateType = {
      userToken: JSON.parse(userToken),
      name: values.name || "New Template",
      subject: values.subject,
      body: values.body,
    };
    createMutation.mutate(payload);
  };

  const errors = {
    subject: formState.errors.subject?.message,
    server: createMutation.error?.message,
    body: formState.errors.body?.message,
    name: formState.errors.name?.message,
  };

  return {
    handleCreateEmailTemplate,
    handleSubmit,
    register,
    errors,
    isLoading: createMutation.isPending,
  };
};
