import AuthWrapper from "@/_layouts/AuthWrapper.tsx";
import TryPremiumComponent from "@/components/_shared/tryPremiumComponent";


const TryPremiumPage = () => {
  return (
    <AuthWrapper>
        <div className="h-full flex px-4">
        <TryPremiumComponent/>

        </div>
    </AuthWrapper>
  )
};

export default TryPremiumPage;