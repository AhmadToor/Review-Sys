import AuthWrapper from "@/_layouts/AuthWrapper";
import AttachBuisnessComponent from "@/components/auth/attachBuisnessComponent";


const AttachBuisnessPage = () => {
  return (
    <AuthWrapper>
        <div className="h-full  flex px-4">
        <AttachBuisnessComponent/>

        </div>
    </AuthWrapper>
  )
};

export default AttachBuisnessPage;
