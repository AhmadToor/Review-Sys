import { emailTemplateSchema } from "@/schema/emailTemplateSchema";
import { z } from "zod";

interface ReviewType {
    id : string
    fullname: string;
    avatar: string;
    rating: number;
    reviewmesg: string;
    mood: string;
    email : string;
}

export type Review = ReviewType
export type EmailTemplateType = z.infer<typeof emailTemplateSchema>