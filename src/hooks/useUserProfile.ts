import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserProfileRequest,
  updateUserProfileRequest,
  updateUserAvatarRequest,
  updateNotificationSettingsRequest,
} from "@/services/userServices";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfileRequest,
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => updateUserProfileRequest(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};

export const useUpdateUserAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => updateUserAvatarRequest(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};

export const useUpdateNotificationSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (settings: any) => updateNotificationSettingsRequest(settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};
