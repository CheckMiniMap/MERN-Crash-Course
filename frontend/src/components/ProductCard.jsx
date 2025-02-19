const ProductCard = ({product}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in
    hover:transform(-translate-y-5px) hover:shadow-xl">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover"/>

      <h3 className="size-"></h3>
    </div>
  );
}
export default ProductCard;