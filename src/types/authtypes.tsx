import * as z from 'zod'
import { resetPasswordSchema, signinschema, signupschema , emailschema} from '@/schema/authSchema'

export type SigninSchemaTypes = z.infer<typeof signinschema>
export type ResetPasswordSchemaTypes = z.infer<typeof resetPasswordSchema>
export type SignupSchemaTypes = z.infer<typeof signupschema>
export type EmailSchemaTypes = z.infer<typeof emailschema>