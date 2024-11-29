interface ReviewType {
    id : string
    fullname: string;
    avatar: string;
    rating: string;
    reviewmesg: string;
    mood: string;
    email : string;
}
interface EmailTemplateType {
    subject : string;
    body: string;
}
export type Review = ReviewType
export type EmailTemplate = EmailTemplateType