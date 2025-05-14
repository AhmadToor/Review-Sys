import AuthWrapper from "@/_layouts/AuthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { resetPasswordRequest } from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must contain at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must contain at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const { token } = useParams<{ token: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const togglePasswordVisibility = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType((prev) =>
      prev === "password" ? "text" : "password",
    );
  };

  const onSubmit = async (data: ResetPasswordFormValues) => {
    if (!token) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Invalid reset token. Please request a new password reset link.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await resetPasswordRequest({
        newpassword: data.password,
        confirmPassword: data.confirmPassword,
        accessToken: token,
      });

      toast({
        title: "Password reset successful",
        description:
          "Your password has been reset. You can now log in with your new password.",
      });

      navigate("/signin");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || "Failed to reset password. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthWrapper>
      <div className="my-auto">
        <h1 className="text-xl font-bold text-center">Reset Your Password</h1>
        <p className="text-base my-2 text-center text-gray-500">
          Enter your new password below
        </p>

        <Card className="my-4 w-full max-w-sm border-none">
          <CardContent className="pt-6 max-w-md max-h-md mx-auto">
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <div className="flex items-baseline relative">
                  <Input
                    id="password"
                    type={passwordType}
                    {...register("password")}
                    placeholder="Your new password"
                    className={
                      errors.password ? "border-red-500 border-[1px]" : ""
                    }
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer absolute right-2.5 top-[9px]"
                  >
                    {passwordType === "text" ? <EyeClosed /> : <Eye />}
                  </div>
                </div>
                {errors.password && (
                  <CardDescription className="text-destructive ml-2">
                    {errors.password.message}
                  </CardDescription>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="flex items-baseline relative">
                  <Input
                    id="confirmPassword"
                    type={confirmPasswordType}
                    {...register("confirmPassword")}
                    placeholder="Confirm your new password"
                    className={
                      errors.confirmPassword
                        ? "border-red-500 border-[1px]"
                        : ""
                    }
                  />
                  <div
                    onClick={toggleConfirmPasswordVisibility}
                    className="cursor-pointer absolute right-2.5 top-[9px]"
                  >
                    {confirmPasswordType === "text" ? <EyeClosed /> : <Eye />}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <CardDescription className="text-destructive ml-2">
                    {errors.confirmPassword.message}
                  </CardDescription>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Reset Password"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

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

export default ResetPasswordPage;
