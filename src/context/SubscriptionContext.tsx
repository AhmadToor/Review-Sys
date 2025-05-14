import { createContext, useContext, ReactNode } from "react";
import { useCurrentSubscription } from "@/hooks/useSubscription";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: "month" | "year";
  features: string[];
}

interface Subscription {
  id: string;
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  plan: SubscriptionPlan;
}

interface SubscriptionContextType {
  subscription: Subscription | null;
  isLoading: boolean;
  error: Error | null;
  isActive: boolean;
  isTrialing: boolean;
  isPastDue: boolean;
  isCanceled: boolean;
  daysRemaining: number | null;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscription: null,
  isLoading: true,
  error: null,
  isActive: false,
  isTrialing: false,
  isPastDue: false,
  isCanceled: false,
  daysRemaining: null,
});

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const { data: subscription, isLoading, error } = useCurrentSubscription();

  const isActive = subscription?.status === "active";
  const isTrialing = subscription?.status === "trialing";
  const isPastDue = subscription?.status === "past_due";
  const isCanceled = subscription?.status === "canceled";

  // Calculate days remaining in current period
  const daysRemaining = subscription
    ? Math.ceil(
        (new Date(subscription.currentPeriodEnd).getTime() - Date.now()) /
          (1000 * 60 * 60 * 24),
      )
    : null;

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        isLoading,
        error,
        isActive,
        isTrialing,
        isPastDue,
        isCanceled,
        daysRemaining,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);
