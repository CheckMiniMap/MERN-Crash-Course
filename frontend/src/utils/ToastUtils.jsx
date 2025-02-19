import { useState } from "react";
import Toast from "./Toast"; 

// Hook to handle showing and hiding toasts
export const useToast = () => {
  const [toast, setToast] = useState(null);

  // Function to trigger toast
  const showToast = (message, type = "success") => {
    setToast({ message, type });

    // Auto-hide after 4s
    setTimeout(() => setToast(null), 4000);
  };

  // Return the toast state, function, and JSX Component
  return {
    toast,
    showToast,
    ToastComponent: () => (toast ? <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} /> : null),
  };
};
