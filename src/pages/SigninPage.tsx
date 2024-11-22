import AuthWrapper from "@/_layouts/AuthWrapper.tsx";
import SigninForm from "@/components/auth/signinForm";
import { Link } from "react-router-dom";


const SignInPage = () => {
  return (
    <AuthWrapper>
        <div className=" my-auto">
          <h1 className="text-xl font-bold text-center">Log into your account</h1>
          <p className="text-base my-2 text-gray-500">Enter your email and password to access your account</p>
          <SigninForm/>
          <p className="text-sm text-center font-light my-2 text-gray-500 dark:text-gray-400">
     Don’t have an account?  
    <Link to ='/signup' className="font-semibold cursor-pointer ml-1 text-black ">
        Create New Account
    </Link>
  </p>
  <Link to="/" className="text-sm mb-auto text-center font-semibold">
    <p>Forgot password?</p>
  </Link>
  </div>
    </AuthWrapper>
  )
};

export default SignInPage;
