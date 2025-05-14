import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getFeedbackTemplatesRequest,
  createFeedbackTemplateRequest,
  updateFeedbackTemplateRequest,
  deleteFeedbackTemplateRequest,
  sendFeedbackEmailRequest,
} from "@/services/feedbackServices";

export const useFeedbackTemplates = () => {
  return useQuery({
    queryKey: ["feedbackTemplates"],
    queryFn: getFeedbackTemplatesRequest,
  });
};

export const useCreateFeedbackTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => createFeedbackTemplateRequest(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedbackTemplates"] });
    },
  });
};

export const useUpdateFeedbackTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateFeedbackTemplateRequest(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedbackTemplates"] });
    },
  });
};

export const useDeleteFeedbackTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteFeedbackTemplateRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedbackTemplates"] });
    },
  });
};

export const useSendFeedbackEmail = () => {
  return useMutation({
    mutationFn: (data: any) => sendFeedbackEmailRequest(data),
  });
};
