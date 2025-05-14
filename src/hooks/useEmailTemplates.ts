import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTemplatesRequest,
  createTemplateRequest,
  updateTemplateRequest,
  deleteTemplateRequest,
} from "@/services/emailTemplateServices";
import { EmailTemplateType } from "@/types/dashboardtypes";

export const useEmailTemplates = () => {
  return useQuery({
    queryKey: ["emailTemplates"],
    queryFn: getTemplatesRequest,
  });
};

export const useCreateEmailTemplate = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (values: EmailTemplateType) => createTemplateRequest(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emailTemplates"] });
    },
  });

  return createMutation;
};

export const useUpdateEmailTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, values }: { id: string; values: EmailTemplateType }) =>
      updateTemplateRequest(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emailTemplates"] });
    },
  });
};

export const useDeleteEmailTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTemplateRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emailTemplates"] });
    },
  });
};
