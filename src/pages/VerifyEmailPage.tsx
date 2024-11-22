import AuthWrapper from "@/_layouts/AuthWrapper.tsx";
import VerifyEmailComponent from "@/components/auth/verifyEmailComponent";


const VerifyEmailPage = () => {
  return (
    <AuthWrapper>
        <div className="h-full  flex px-4">
        <VerifyEmailComponent/>

        </div>
    </AuthWrapper>
  )
};

export default VerifyEmailPage;