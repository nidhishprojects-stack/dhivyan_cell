import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CustomerDetails } from "../utils/whatsappOrder";

type CustomerContextValue = {
  customer: CustomerDetails;
  savedCustomer: CustomerDetails;
  termsAccepted: boolean;
  isComplete: boolean;
  updateCustomer: (fields: Partial<CustomerDetails>) => void;
  setTermsAccepted: (accepted: boolean) => void;
  saveCustomer: () => void;
};

const CUSTOMER_KEY = "anand_customer";
const TERMS_KEY = "anand_terms";

const emptyCustomer: CustomerDetails = {
  name: "",
  address: "",
  phone: "",
  email: "",
};

const CustomerContext = createContext<CustomerContextValue | null>(null);

function loadCustomer(): CustomerDetails {
  try {
    const raw = localStorage.getItem(CUSTOMER_KEY);
    return raw ? { ...emptyCustomer, ...(JSON.parse(raw) as CustomerDetails) } : emptyCustomer;
  } catch {
    return emptyCustomer;
  }
}

function isCustomerValid(c: CustomerDetails): boolean {
  return (
    c.name.trim() !== "" &&
    c.address.trim() !== "" &&
    c.phone.trim() !== "" &&
    c.email.trim() !== "" &&
    c.email.includes("@")
  );
}

export function CustomerProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<CustomerDetails>(loadCustomer);
  const [termsAccepted, setTermsAccepted] = useState(
    () => localStorage.getItem(TERMS_KEY) === "true",
  );
  const [saved, setSaved] = useState<CustomerDetails>(loadCustomer);

  const updateCustomer = useCallback((fields: Partial<CustomerDetails>) => {
    setCustomer((prev) => ({ ...prev, ...fields }));
  }, []);

  const saveCustomer = useCallback(() => {
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
    setSaved(customer);
  }, [customer]);

  useEffect(() => {
    localStorage.setItem(TERMS_KEY, String(termsAccepted));
  }, [termsAccepted]);

  const isComplete = isCustomerValid(customer) && termsAccepted;

  return (
    <CustomerContext.Provider
      value={{
        customer,
        savedCustomer: saved,
        termsAccepted,
        isComplete,
        updateCustomer,
        setTermsAccepted,
        saveCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const ctx = useContext(CustomerContext);
  if (!ctx) throw new Error("useCustomer must be used within CustomerProvider");
  return ctx;
}

export function useSavedCustomer(): CustomerDetails {
  try {
    const raw = localStorage.getItem(CUSTOMER_KEY);
    return raw ? { ...emptyCustomer, ...(JSON.parse(raw) as CustomerDetails) } : emptyCustomer;
  } catch {
    return emptyCustomer;
  }
}

export function isSavedCustomerComplete(c: CustomerDetails): boolean {
  return isCustomerValid(c);
}
