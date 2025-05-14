import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useBusinessProfiles } from "@/hooks/useBusinessProfiles";

interface BusinessProfile {
  id: string;
  name: string;
  location: string;
  avatar?: string;
}

interface BusinessContextType {
  currentBusiness: BusinessProfile | null;
  businesses: BusinessProfile[];
  isLoading: boolean;
  error: Error | null;
  setCurrentBusiness: (business: BusinessProfile | null) => void;
}

const BusinessContext = createContext<BusinessContextType>({
  currentBusiness: null,
  businesses: [],
  isLoading: true,
  error: null,
  setCurrentBusiness: () => {},
});

export const BusinessProvider = ({ children }: { children: ReactNode }) => {
  const [currentBusiness, setCurrentBusiness] =
    useState<BusinessProfile | null>(null);
  const { data: businessesData, isLoading, error } = useBusinessProfiles();

  useEffect(() => {
    if (businessesData && businessesData.length > 0) {
      const storedBusinessId = localStorage.getItem("attachedBuisness");

      if (storedBusinessId) {
        const foundBusiness = businessesData.find(
          (b) => b.id === storedBusinessId,
        );
        if (foundBusiness) {
          setCurrentBusiness(foundBusiness);
        } else if (businessesData.length > 0) {
          // If stored business not found, use the first one
          setCurrentBusiness(businessesData[0]);
          localStorage.setItem("attachedBuisness", businessesData[0].id);
        }
      } else if (businessesData.length > 0) {
        // If no stored business, use the first one
        setCurrentBusiness(businessesData[0]);
        localStorage.setItem("attachedBuisness", businessesData[0].id);
      }
    }
  }, [businessesData]);

  const handleSetCurrentBusiness = (business: BusinessProfile | null) => {
    setCurrentBusiness(business);
    if (business) {
      localStorage.setItem("attachedBuisness", business.id);
    } else {
      localStorage.removeItem("attachedBuisness");
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        currentBusiness,
        businesses: businessesData || [],
        isLoading,
        error,
        setCurrentBusiness: handleSetCurrentBusiness,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => useContext(BusinessContext);
