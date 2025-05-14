import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSubscriptionPlansRequest,
  getCurrentSubscriptionRequest,
  createCheckoutSessionRequest,
  cancelSubscriptionRequest,
  updatePaymentMethodRequest,
  getInvoicesRequest,
} from "@/services/subscriptionServices";

export const useSubscriptionPlans = () => {
  return useQuery({
    queryKey: ["subscriptionPlans"],
    queryFn: getSubscriptionPlansRequest,
  });
};

export const useCurrentSubscription = () => {
  return useQuery({
    queryKey: ["currentSubscription"],
    queryFn: getCurrentSubscriptionRequest,
  });
};

export const useCreateCheckoutSession = () => {
  return useMutation({
    mutationFn: (planId: string) => createCheckoutSessionRequest(planId),
  });
};

export const useCancelSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelSubscriptionRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentSubscription"] });
    },
  });
};

export const useUpdatePaymentMethod = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (paymentMethodId: string) =>
      updatePaymentMethodRequest(paymentMethodId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentSubscription"] });
    },
  });
};

export const useInvoices = () => {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoicesRequest,
  });
};
