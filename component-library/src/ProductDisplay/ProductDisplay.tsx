import type{ ProductDisplayProps } from "../types"

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



