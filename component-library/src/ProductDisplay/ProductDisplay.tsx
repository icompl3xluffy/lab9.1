import type{ Product , ProductDisplayProp } from "../types"

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product, showDescription, showStockStatus, onAddToCart, children,
}) => (
  <div className="p-4 border rounded shadow">
    {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p>${product.price.toFixed(2)}</p>
    {showDescription && <p>{product.description}</p>}
    {showStockStatus && <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>}
    {onAddToCart && (
      <button disabled={!product.inStock} onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    )}
    {children}
  </div>
);


// const product = {
//   id: '1',
//   name: 'Wireless Headphones',
//   price: 199.99,
//   description: 'High-quality wireless headphones with noise cancellation.',
//   imageUrl: 'https://example.com/headphones.jpg',
//   inStock: true
// };
 
// <ProductDisplay
//   product={product}
//   showDescription={true}
//   showStockStatus={true}
//   onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
// >
//   <div className="text-sm text-gray-500">
//     Free shipping available
//   </div>
// </ProductDisplay>
