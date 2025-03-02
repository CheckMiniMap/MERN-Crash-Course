import { Container } from "postcss";
import React, { useState } from "react";
import { useProductStore } from "@/store/product";
import { useToast } from "@/utils/ToastUtils";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { showToast, ToastComponent } = useToast(); // Get the toast state & functions
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      showToast(message, "success"); // Show success toast
      setNewProduct({ name: "", price: "", image: "" });
    } else {
      showToast(message, "error"); // Show error toast
    }
  };


  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-col space-y-8 sm:w-xl">
            <h1 className="text-2xl font-bold text-center my-4">
              Create New Product
            </h1>
            <div className="flex flex-col space-y-4 w-full bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <input 
                placeholder="Product Name" 
                name="name" 
                value={newProduct.name} 
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value })}
                className="rounded-lg p-2 border-2 border-gray-200 dark:border-gray-600"
              />
              <input 
                placeholder="Price" 
                name="price" 
                type="number" 
                value={newProduct.price} 
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value })}
                className="rounded-lg p-2 border-2 border-gray-200 dark:border-gray-600"
              />
              <input 
                placeholder="Image URL" 
                name="image" 
                value={newProduct.image} 
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value })}
                className="rounded-lg p-2 border-2 border-gray-200 dark:border-gray-600"
              />
              <button className="rounded-lg p-2 bg-blue-700 dark:bg-blue-500 text-white hover:bg-blue-600 transition duration-200" onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
      </div>

      {/* Show Toast Component */}
      {ToastComponent()}
    </>
  );
};

export default CreatePage;
