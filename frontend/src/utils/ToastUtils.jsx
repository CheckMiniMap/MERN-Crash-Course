import { useState } from "react";
import Toast from "@/utils/Toast"; // Ensure the correct path

// Hook to handle showing and hiding toasts
export const useToast = () => {
  const [toast, setToast] = useState(null);

  // Function to trigger toast
  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000); // Auto-hide after 4 seconds
  };

  return {
    toast,
    showToast,
    ToastComponent: () => (toast ? <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} /> : null),
  };
};
