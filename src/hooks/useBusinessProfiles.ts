import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBusinessProfilesRequest,
  getBusinessProfileRequest,
  updateBusinessProfileRequest,
  syncBusinessDataRequest,
  getBusinessAnalyticsRequest,
} from "@/services/businessServices";

export const useBusinessProfiles = () => {
  return useQuery({
    queryKey: ["businessProfiles"],
    queryFn: getBusinessProfilesRequest,
  });
};

export const useBusinessProfile = (id: string) => {
  return useQuery({
    queryKey: ["businessProfile", id],
    queryFn: () => getBusinessProfileRequest(id),
    enabled: !!id,
  });
};

export const useUpdateBusinessProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateBusinessProfileRequest(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["businessProfile", variables.id],
      });
      queryClient.invalidateQueries({ queryKey: ["businessProfiles"] });
    },
  });
};

export const useSyncBusinessData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => syncBusinessDataRequest(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["businessProfile", id] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};

export const useBusinessAnalytics = (id: string, period: string = "month") => {
  return useQuery({
    queryKey: ["businessAnalytics", id, period],
    queryFn: () => getBusinessAnalyticsRequest(id, period),
    enabled: !!id,
  });
};
