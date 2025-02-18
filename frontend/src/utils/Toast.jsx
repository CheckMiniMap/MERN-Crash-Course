import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline, MdWarningAmber } from "react-icons/md";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Auto-hide after 4 seconds
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Icons & styles based on type
  const toastConfig = {
    success: {
      bg: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200",
      icon: <FaRegCheckCircle className="w-5 h-5 text-green-500" />,
    },
    error: {
      bg: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200",
      icon: <MdErrorOutline className="w-5 h-5 text-red-500" />,
    },
    warning: {
      bg: "bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-200",
      icon: <MdWarningAmber className="w-5 h-5 text-orange-500" />,
    },
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg ${toastConfig[type].bg}`}>
      {/* Icon */}
      <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg">
        {toastConfig[type].icon}
      </div>

      {/* Message */}
      <div className="ms-3 text-sm font-normal">{message}</div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="ms-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-gray-900 p-1.5 rounded-lg"
        aria-label="Close"
      >
        <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
