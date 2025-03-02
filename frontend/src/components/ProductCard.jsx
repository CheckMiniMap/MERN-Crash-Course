import { useProductStore } from "@/store/product";
import { useToast } from "@/utils/ToastUtils";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React, { useState } from "react";
import Modal from "@/utils/Modal";

const styles = (color) => {
  const cmnBtn = "flex justify-center items-center size-9 rounded";

  return {
    cardContainer: "shadow-lg rounded-lg overflow-hidden transition-all duration-200 ease-in hover:-translate-y-1 hover:shadow-2xl bg-white dark:bg-gray-700",
    productImg: "h-48 w-full object-cover",
    cmnBtn,
    blue: `${cmnBtn} bg-blue-500 hover:bg-blue-400 active:bg-blue-600`,
    red: `${cmnBtn} bg-red-600 hover:bg-red-500 active:bg-red-700`,
  }[color] || ""; // Return empty string if invalid color
};


const ProductCard = ({product}) => {
  const {deleteProduct} = useProductStore();
  const { showToast, ToastComponent } = useToast(); // Get the toast state & functions
  const handleDeleteProduct = async (pid) => {
    const {success,message} = await deleteProduct(pid);
    if (success) {
      showToast(message, "success"); // Show success toast
    } else {
      showToast(message, "error"); // Show error toast
    }
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles("cardContainer")}>
        <img src={product.image} alt={product.name} className={styles("productImg")}/>

        <div className="p-4">
          <h3 className="w-full mb-2">{product.name}</h3>
          <p className="font-bold text-xl text-gray-600 dark:text-gray-200 mb-2">${product.price}</p>
        </div>
        <div className="flex space-x-2.5 p-4">
          <button className={styles("blue")} onClick={() => setOpen(true)}>
            <FaRegEdit className="size-5" />
            </button>
          <button className={styles("red")} onClick={() => handleDeleteProduct(product._id)}>
            <RiDeleteBin5Fill className="size-5"/>
            </button>
        </div>
      </div>
      {/* Show Toast Component */}
      {ToastComponent()}
      <Modal product={product} open={open} onClose={() => setOpen(false)} showToast={showToast} >
        <FaRegEdit className="size-5" />
      </Modal>
    </>
  );
}
export default ProductCard;