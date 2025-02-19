import { Container } from "postcss";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "@/store/product";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products", products);

  return (
    <div className="max-w py-12">
      <div className="flex flex-col space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500  text-transparent bg-clip-text text-center">
          Current Products 🚀
        </h1>

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {products.map((product) => (
            
          ))}
          <div className="col-span-1"></div>
        </div>

        <h2 className="text-lg sm:text-xl text-center font-bold text-gray-500">
          No products found 😢 
          <Link to={"/create"}>
            <span className="text-blue-500 hover:underline">Create a product</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
