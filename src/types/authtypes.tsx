import { z } from "zod";
import {
  signinschema,
  resetPasswordSchema,
  signupschema,
  emailschema,
} from "@/schema/authSchema";

export type SigninSchemaTypes = z.infer<typeof signinschema>;
export type ResetPasswordSchemaTypes = z.infer<typeof resetPasswordSchema>;
export type SignupSchemaTypes = z.infer<typeof signupschema>;
export type EmailSchemaTypes = z.infer<typeof emailschema>;

export interface UserType {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar?: string;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthState {
  user: UserType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (token: string, user: UserType, businessId?: string) => void;
  logout: () => void;
  updateUser: (user: Partial<UserType>) => void;
}
