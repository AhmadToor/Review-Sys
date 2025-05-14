import { z } from "zod";
import { emailTemplateSchema } from "@/schema/emailTemplateSchema";

export interface ReviewType {
  id: string;
  fullname: string;
  avatar?: string;
  rating: number;
  reviewmesg: string;
  mood?: string;
  email?: string;
  response?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BusinessProfileType {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  website?: string;
  phone?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SubscriptionPlanType {
  id: string;
  name: string;
  price: number;
  interval: "month" | "year";
  features: string[];
}

export interface SubscriptionType {
  id: string;
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  plan: SubscriptionPlanType;
}

export interface UserProfileType {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar?: string;
  phone?: string;
  notificationSettings?: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

export interface InvoiceType {
  id: string;
  amount: number;
  status: "paid" | "open" | "void";
  date: string;
  pdf?: string;
}

export interface SentimentData {
  positive: number;
  neutral: number;
  negative: number;
  total: number;
}

export interface RatingDistribution {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  total: number;
}

export interface AnalyticsData {
  totalReviews: number;
  averageRating: number;
  responseRate: number;
  newReviews: number;
  reviewTrend: number;
  sentimentDistribution: SentimentData;
  ratingDistribution: RatingDistribution;
  reviewsOverTime: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }>;
  };
}

export type Review = ReviewType;
export type EmailTemplateType = z.infer<typeof emailTemplateSchema>;
