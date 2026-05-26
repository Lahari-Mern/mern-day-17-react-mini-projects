function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: "2999",
    color: "Black",
    brand: "Boat"
  };
  return (
    <div>
      <h2>{product.name}</h2>
      <p> Price: {product.price}</p>
      <p>Color: {product.color}</p>
      <p>Brand: {product.brand}</p>
      <button>Buy Now</button>
    </div>
  );
}
export default ProductCard;