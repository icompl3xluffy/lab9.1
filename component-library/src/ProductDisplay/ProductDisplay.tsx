import type{ Product , ProductDisplayProp } from "../types"


export function Product(props: ProductDisplayProp){
    return(
        <>
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
        
        </>

    );
};
import React from 'react';
import { UserProfileCardProps } from '../../types';

/**
 * Shows a user's info.
 * @param user - the user to display (required)
 * @param showEmail - show the email if true (optional)
 * @param showRole - show the role if true (optional)
 * @param onEdit - if given, shows an Edit button that calls it with user.id
 * @param children - extra content shown at the bottom
 */
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user, showEmail, showRole, onEdit, children,
}) => (
  <div className="p-4 border rounded shadow">
    {user.avatarUrl && (
      <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full" />
    )}
    <h2 className="text-xl font-bold">{user.name}</h2>
    {showEmail && <p>{user.email}</p>}
    {showRole && <p>{user.role}</p>}
    {onEdit && (
      <button onClick={() => onEdit(user.id)}>Edit Profile</button>
    )}
    {children}
  </div>
);

4. ProductDisplay.tsx

tsx
import React from 'react';
import { ProductDisplayProps } from '../../types';

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
