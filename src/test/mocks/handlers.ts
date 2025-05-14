import { http, HttpResponse } from "msw";

// Use environment variable if available, otherwise fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const handlers = [
  // Auth endpoints
  http.post(`${API_URL}/users/login`, () => {
    return HttpResponse.json({
      token: "mock-token-12345",
      attachedBuisness: "next.js",
      user: {
        id: "1",
        firstname: "Test",
        lastname: "User",
        email: "test@example.com",
      },
    });
  }),

  http.post(`${API_URL}/users/register`, () => {
    return HttpResponse.json({
      token: "mock-token-12345",
      user: {
        id: "1",
        firstname: "Test",
        lastname: "User",
        email: "test@example.com",
      },
    });
  }),

  http.post(`${API_URL}/users/resetpassword`, () => {
    return HttpResponse.json({
      message: "Password reset successfully",
    });
  }),

  http.post(`${API_URL}/users/forgotpassword`, () => {
    return HttpResponse.json({
      message: "Password reset email sent successfully",
    });
  }),

  http.post(`${API_URL}/users/change-password`, () => {
    return HttpResponse.json({
      message: "Password changed successfully",
    });
  }),

  http.post(`${API_URL}/users/verify-email/:token`, () => {
    return HttpResponse.json({
      message: "Email verified successfully",
    });
  }),

  http.post(`${API_URL}/users/resend-verification`, () => {
    return HttpResponse.json({
      message: "Verification email resent successfully",
    });
  }),

  http.post(`${API_URL}/attachbuisness`, () => {
    return HttpResponse.json({
      buisness: "next.js",
      url: "https://business.google.com/create",
    });
  }),

  // User profile endpoints
  http.get(`${API_URL}/users/profile`, () => {
    return HttpResponse.json({
      id: "1",
      firstname: "Test",
      lastname: "User",
      email: "test@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=test",
      notificationSettings: {
        email: true,
        push: false,
        sms: true,
      },
    });
  }),

  http.put(`${API_URL}/users/profile`, () => {
    return HttpResponse.json({
      id: "1",
      firstname: "Updated",
      lastname: "User",
      email: "test@example.com",
    });
  }),

  http.post(`${API_URL}/users/avatar`, () => {
    return HttpResponse.json({
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=updated",
    });
  }),

  http.put(`${API_URL}/users/notification-settings`, () => {
    return HttpResponse.json({
      notificationSettings: {
        email: true,
        push: true,
        sms: false,
      },
    });
  }),

  // Email templates endpoints
  http.get(`${API_URL}/email-templates`, () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "Welcome Email",
        subject: "Welcome to our service!",
        body: "<p>Thank you for joining our service.</p>",
        createdAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        name: "Follow-up Email",
        subject: "How was your experience?",
        body: "<p>We hope you enjoyed our service.</p>",
        createdAt: "2023-01-02T00:00:00.000Z",
      },
    ]);
  }),

  http.post(`${API_URL}/email-templates`, () => {
    return HttpResponse.json({
      id: "3",
      name: "New Template",
      subject: "New Template Subject",
      body: "<p>New template body content</p>",
      createdAt: "2023-01-03T00:00:00.000Z",
    });
  }),

  http.put(`${API_URL}/email-templates/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: "Updated Template",
      subject: "Updated Subject",
      body: "<p>Updated body content</p>",
      updatedAt: "2023-01-04T00:00:00.000Z",
    });
  }),

  http.delete(`${API_URL}/email-templates/:id`, () => {
    return HttpResponse.json({
      message: "Template deleted successfully",
    });
  }),

  // Feedback templates endpoints
  http.get(`${API_URL}/feedback-templates`, () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "Customer Satisfaction",
        subject: "How was your experience?",
        body: "<p>Please rate your experience with us.</p>",
        createdAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        name: "Product Feedback",
        subject: "Tell us about our product",
        body: "<p>We'd love to hear your thoughts on our product.</p>",
        createdAt: "2023-01-02T00:00:00.000Z",
      },
    ]);
  }),

  http.post(`${API_URL}/feedback-templates`, () => {
    return HttpResponse.json({
      id: "3",
      name: "New Feedback Template",
      subject: "New Feedback Subject",
      body: "<p>New feedback template body</p>",
      createdAt: "2023-01-03T00:00:00.000Z",
    });
  }),

  http.put(`${API_URL}/feedback-templates/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: "Updated Feedback Template",
      subject: "Updated Feedback Subject",
      body: "<p>Updated feedback body content</p>",
      updatedAt: "2023-01-04T00:00:00.000Z",
    });
  }),

  http.delete(`${API_URL}/feedback-templates/:id`, () => {
    return HttpResponse.json({
      message: "Feedback template deleted successfully",
    });
  }),

  http.post(`${API_URL}/feedback/send-email`, () => {
    return HttpResponse.json({
      message: "Feedback email sent successfully",
    });
  }),

  // Business profiles endpoints
  http.get(`${API_URL}/business-profiles`, () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "Coffee Shop",
        location: "New York",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=coffee",
      },
      {
        id: "2",
        name: "Bakery",
        location: "Los Angeles",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bakery",
      },
    ]);
  }),

  http.get(`${API_URL}/business-profiles/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: params.id === "1" ? "Coffee Shop" : "Bakery",
      location: params.id === "1" ? "New York" : "Los Angeles",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${params.id === "1" ? "coffee" : "bakery"}`,
      website: "https://example.com",
      phone: "+1234567890",
      description: "A sample business description.",
    });
  }),

  http.put(`${API_URL}/business-profiles/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: "Updated Business",
      location: "Updated Location",
      website: "https://updated-example.com",
      phone: "+0987654321",
      description: "Updated business description.",
    });
  }),

  http.post(`${API_URL}/business-profiles/:id/sync`, () => {
    return HttpResponse.json({
      message: "Business data synced successfully",
    });
  }),

  http.get(`${API_URL}/business-profiles/:id/analytics`, () => {
    return HttpResponse.json({
      totalReviews: 240,
      averageRating: 4.2,
      responseRate: 87,
      newReviews: 24,
      reviewTrend: 12,
      sentimentDistribution: {
        positive: 180,
        neutral: 40,
        negative: 20,
        total: 240,
      },
      ratingDistribution: {
        "5": 120,
        "4": 80,
        "3": 20,
        "2": 15,
        "1": 5,
        total: 240,
      },
      reviewsOverTime: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Reviews",
            data: [30, 40, 35, 50, 45, 60],
            backgroundColor: "rgba(70, 72, 255, 0.2)",
            borderColor: "#4648FF",
            borderWidth: 2,
          },
        ],
      },
    });
  }),

  // Reviews endpoints
  http.get(`${API_URL}/reviews`, () => {
    return HttpResponse.json([
      {
        id: "1",
        fullname: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        rating: 4.5,
        reviewmesg: "Great service, highly recommend!",
        mood: "Happy",
        email: "john@example.com",
        createdAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        fullname: "Jane Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
        rating: 2.0,
        reviewmesg: "Service was below expectations.",
        mood: "Angry",
        email: "jane@example.com",
        createdAt: "2023-01-02T00:00:00.000Z",
      },
    ]);
  }),

  http.get(`${API_URL}/reviews/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      fullname: params.id === "1" ? "John Doe" : "Jane Smith",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${params.id === "1" ? "john" : "jane"}`,
      rating: params.id === "1" ? 4.5 : 2.0,
      reviewmesg:
        params.id === "1"
          ? "Great service, highly recommend!"
          : "Service was below expectations.",
      mood: params.id === "1" ? "Happy" : "Angry",
      email: params.id === "1" ? "john@example.com" : "jane@example.com",
      createdAt:
        params.id === "1"
          ? "2023-01-01T00:00:00.000Z"
          : "2023-01-02T00:00:00.000Z",
    });
  }),

  http.post(`${API_URL}/reviews/:id/respond`, () => {
    return HttpResponse.json({
      message: "Response submitted successfully",
    });
  }),

  // AI response endpoints
  http.post(`${API_URL}/ai/generate-response`, () => {
    return HttpResponse.json({
      aiResponse:
        "Thank you for your feedback. We appreciate your comments and will work to improve our service.",
    });
  }),

  // Bulk responses endpoint
  http.post(`${API_URL}/ai/bulk-responses`, () => {
    return HttpResponse.json({
      responses: [
        {
          reviewId: "1",
          aiResponse:
            "Thank you for your positive feedback! We're glad you enjoyed our service.",
        },
        {
          reviewId: "2",
          aiResponse:
            "We apologize for your experience. We would love to hear more about how we can improve.",
        },
      ],
    });
  }),

  // Subscription endpoints
  http.get(`${API_URL}/subscriptions/plans`, () => {
    return HttpResponse.json([
      {
        id: "plan_basic",
        name: "Basic",
        price: 0,
        interval: "month",
        features: ["5 reviews per month", "Basic analytics", "Email support"],
      },
      {
        id: "plan_pro",
        name: "Pro",
        price: 29,
        interval: "month",
        features: [
          "Unlimited reviews",
          "Advanced analytics",
          "Priority support",
          "AI response generation",
          "Bulk responses",
        ],
      },
      {
        id: "plan_enterprise",
        name: "Enterprise",
        price: 99,
        interval: "month",
        features: [
          "Everything in Pro",
          "Custom branding",
          "API access",
          "Dedicated account manager",
        ],
      },
    ]);
  }),

  http.get(`${API_URL}/subscriptions/current`, () => {
    return HttpResponse.json({
      id: "sub_123456",
      status: "active",
      currentPeriodEnd: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      cancelAtPeriodEnd: false,
      plan: {
        id: "plan_pro",
        name: "Pro",
        price: 29,
        interval: "month",
        features: [
          "Unlimited reviews",
          "Advanced analytics",
          "Priority support",
          "AI response generation",
          "Bulk responses",
        ],
      },
    });
  }),

  http.post(`${API_URL}/subscriptions/create-checkout-session`, () => {
    return HttpResponse.json({
      url: "https://checkout.stripe.com/mock-checkout",
    });
  }),

  http.post(`${API_URL}/subscriptions/cancel`, () => {
    return HttpResponse.json({
      message: "Subscription canceled successfully",
    });
  }),

  http.post(`${API_URL}/subscriptions/update-payment-method`, () => {
    return HttpResponse.json({
      message: "Payment method updated successfully",
    });
  }),

  http.get(`${API_URL}/subscriptions/invoices`, () => {
    return HttpResponse.json([
      {
        id: "inv_123456",
        amount: 29,
        status: "paid",
        date: "2023-01-01T00:00:00.000Z",
        pdf: "https://example.com/invoice-123456.pdf",
      },
      {
        id: "inv_123457",
        amount: 29,
        status: "paid",
        date: "2023-02-01T00:00:00.000Z",
        pdf: "https://example.com/invoice-123457.pdf",
      },
    ]);
  }),
];
