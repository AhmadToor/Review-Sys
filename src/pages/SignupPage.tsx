import AuthWrapper from "@/_layouts/AuthWrapper.tsx";
import { SignUpForm } from "@/components/auth/signupform";
import { Link } from "react-router-dom";


const SignupPage = () => {
  return (
    <AuthWrapper>
        <div className=" my-auto">
          <h1 className="text-xl font-bold text-center">Create your account</h1>
          <p className="text-base my-2 text-center text-gray-500">Manage your reviews with AI to make it efficient.</p>
          <SignUpForm/>
          <p className="text-sm text-center font-light my-2 text-gray-500 dark:text-gray-400">
     Already have an account?  
    <Link to ='/signin' className="font-semibold cursor-pointer ml-1 text-black ">
        Login now
    </Link>
  </p>
  
  </div>
    </AuthWrapper>
  )
};

export default SignupPage;
