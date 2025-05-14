import api from "@/api";

export const getSubscriptionPlansRequest = async () => {
  try {
    const response = await api.get("/subscriptions/plans");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getCurrentSubscriptionRequest = async () => {
  try {
    const response = await api.get("/subscriptions/current");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const createCheckoutSessionRequest = async (planId: string) => {
  try {
    const response = await api.post("/subscriptions/create-checkout-session", {
      planId,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const cancelSubscriptionRequest = async () => {
  try {
    const response = await api.post("/subscriptions/cancel");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updatePaymentMethodRequest = async (paymentMethodId: string) => {
  try {
    const response = await api.post("/subscriptions/update-payment-method", {
      paymentMethodId,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getInvoicesRequest = async () => {
  try {
    const response = await api.get("/subscriptions/invoices");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
