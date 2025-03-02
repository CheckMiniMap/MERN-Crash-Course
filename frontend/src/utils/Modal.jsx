import { useProductStore } from "@/store/product";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const styles = (type) => {
  return {
    input: `w-full rounded-lg p-2 text-gray-500 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600 
      focus:outline-none focus:border-gray-300 focus:dark:border-gray-500`,
    cancel: `rounded-lg py-2 px-4 border-2 border-gray-200 dark:border-gray-600  hover:border-gray-300 hover:dark:border-gray-500 focus:border-gray-200 focus:bg-gray-200 focus:dark:border-gray-600 focus:dark:bg-gray-600`,
    submit: `rounded-lg py-2 px-4 bg-blue-700 dark:bg-blue-500 text-white hover:bg-blue-600 transition duration-200`,
  }[type] || ""; // Return empty string if invalid type
}

export default function Modal ({ product, open, onClose, showToast }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { updateProduct } = useProductStore();
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (success)
      showToast(message, "success"); // Show success toast
    else
      showToast(message, "error"); // Show error toast
    onClose();
  };

  return (
    // backdrop
    <div 
      onClick={onClose} 
      className={`
      fixed inset-0 flex justify-center items-center transition-colors
      ${open ? "visible bg-black/20" : "invisible"}
    `}>

      {/* modal */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col items-center sm:w-lg
        bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}>
        {/* close button */}
        <button 
          onClick={onClose}
          className={`
          absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-transparent hover:text-gray-300 active:text-gray-500
          `}>
          <IoClose className="size-5" />
        </button>
        {/* content */}
        <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-200 pb-4">Edit Product</h1>
        <div className="flex flex-col items-center space-y-2 w-full">
          <input 
            placeholder="Product Name" 
            name="name" 
            value={updatedProduct.name}
            onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
            className={styles("input")}
          />
          <input 
            placeholder="Price" 
            name="price" 
            type="number"
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
            className={styles("input")}
          />
          <input 
            placeholder="Image URL" 
            name="image" 
            value={updatedProduct.image}
            onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
            className={styles("input")}
          />
          <div className={`flex space-x-2 mt-2`}>
            <button 
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              className={styles("submit")}>
                Submit
            </button>
            <button 
              onClick={onClose}
              className={styles("cancel")}>
                Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}