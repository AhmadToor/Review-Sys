import { z } from "zod";

export const emailTemplateSchema = z.object({
    "userToken" : z.string().optional(),
    "subject": z.string().max(100, "Subject can't be more than 100 characters").min(1, "This field is required."),
    "body" : z.string().min(1, "This field is required.")
})