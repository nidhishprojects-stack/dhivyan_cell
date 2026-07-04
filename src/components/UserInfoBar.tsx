import { Link } from "react-router-dom";
import { isSavedCustomerComplete, useCustomer } from "../context/CustomerContext";

export function UserInfoBar() {
  const { savedCustomer } = useCustomer();
  const complete = isSavedCustomerComplete(savedCustomer);

  if (!complete) {
    return (
      <div className="bg-primary text-white text-sm py-2 px-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <span className="text-white/90">
            Add your delivery details in{" "}
            <Link to="/cart" className="underline font-semibold hover:text-white">
              Cart
            </Link>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary text-white text-sm py-2 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center gap-x-6 gap-y-1">
        <span>
          <span className="text-white/70">Name:</span> {savedCustomer.name}
        </span>
        <span>
          <span className="text-white/70">Phone:</span> {savedCustomer.phone}
        </span>
        <span>
          <span className="text-white/70">Email:</span> {savedCustomer.email}
        </span>
        <span className="truncate max-w-md">
          <span className="text-white/70">Address:</span> {savedCustomer.address}
        </span>
        <Link
          to="/cart"
          className="ml-auto text-xs underline text-white/80 hover:text-white shrink-0"
        >
          Edit details
        </Link>
      </div>
    </div>
  );
}
