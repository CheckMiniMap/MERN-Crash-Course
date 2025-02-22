import { useProductStore } from "@/store/product";
import { useToast } from "@/utils/ToastUtils";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

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

  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in
      hover:hover:-translate-y-1 hover:shadow-2xl bg-white dark:bg-gray-700">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover"/>

        <div className="p-4">
          <h3 className="w-full mb-2">{product.name}</h3>
          <p className="font-bold text-xl text-gray-600 dark:text-gray-200 mb-2">${product.price}</p>
        </div>
        <div className="flex space-x-2.5 p-4">
          <button className="flex justify-center items-center size-9 rounded bg-blue-500  hover:bg-blue-400">
            <FaRegEdit className="size-5" />
            </button>
          <button className="flex justify-center items-center size-9 rounded bg-red-600 hover:bg-red-500" onClick={() => handleDeleteProduct(product._id)}>
            <RiDeleteBin5Fill className="size-5"/>
            </button>
        </div>
      </div>
      {/* Show Toast Component */}
      {ToastComponent()}
    </>
  );
}
export default ProductCard;