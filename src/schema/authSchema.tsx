import {z} from 'zod'

export const signinschema = z.object({
    email : z.string({
        required_error : 'Email is required',
        invalid_type_error: 'Invalid Email'
    }).min(1, 'Email is required!').email({
        message : 'Invalid Email'
    }),
    password : z.string(
        {
            required_error: 'Password is required',
            invalid_type_error: 'Password must contains alphabets'
        }
    ).trim().min(8,'Password must conatin atleast 8 characters.')
})

export const resetPasswordSchema = z
  .object({
    oldpassword: z.string().min(1, 'Old Password is required!').optional(),
    newpassword: z.string().min(8, 'Password must conatin atleast 8 characters.'),
    confirmPassword: z.string().min(8, 'Password must conatin atleast 8 characters.'),
  })
  .refine((data) => data.newpassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  });

  export const signupschema = z.object({
    firstname : z.string().trim().min(3, 'Name must contain atleast 3 characters'),
    lastname : z.string().trim(),
    email : z.string({
      required_error : 'Email is required',
      invalid_type_error: 'Invalid Email'
  }).min(1,'Email is Required').email({
      message : 'Invalid Email'
  }),
  password : z.string(
    {
        required_error: 'Password is required',
        invalid_type_error: 'Password must contains alphabets'
    }
).trim().min(8,'Password must conatin atleast 8 characters.'),
  confirmpassword : z.string().min(8, 'Password must conatin atleast 8 characters.')
}).refine((data)=> data.password === data.confirmpassword , {
  message: "Passwords don't match",
  path : ['confirmpassword']
})
  
export const emailschema = z.object({
  email : z.string().min(1, 'Email is required!').email({message: 'Email is Invalid!'})})