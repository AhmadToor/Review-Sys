import AuthWrapper from "@/_layouts/AuthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { forgotPasswordRequest } from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsSubmitting(true);
    try {
      await forgotPasswordRequest(data.email);
      setIsSuccess(true);
      toast({
        title: "Reset email sent",
        description: "Check your inbox for password reset instructions.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || "Failed to send reset email. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthWrapper>
      <div className="my-auto">
        <h1 className="text-xl font-bold text-center">
          {isSuccess ? "Check Your Email" : "Forgot Password"}
        </h1>
        <p className="text-base my-2 text-center text-gray-500">
          {isSuccess
            ? "We've sent you an email with instructions to reset your password."
            : "Enter your email address and we'll send you a link to reset your password."}
        </p>

        {!isSuccess ? (
          <Card className="my-4 w-full max-w-sm border-none">
            <CardContent className="pt-6 max-w-md max-h-md mx-auto">
              <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    placeholder="xyz@example.com"
                    className={
                      errors.email ? "border-red-500 border-[1px]" : ""
                    }
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="my-4 w-full max-w-sm border-none">
            <CardContent className="pt-6 max-w-md max-h-md mx-auto text-center">
              <p className="mb-4">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSuccess(false)}
                className="w-full"
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        <p className="text-sm text-center font-light my-2 text-gray-500">
          Remember your password?{" "}
          <Link
            to="/signin"
            className="font-semibold cursor-pointer ml-1 text-black"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPasswordPage;
