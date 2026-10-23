
import { AlertBox } from "./AlertBox/AlertBox";
import { UserProfileCard } from "./UserprofileCard/UserProfileCard";
import { ProductDisplay } from "./ProductDisplay/ProductDisplay";


const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

export default function App() {

    return(
        <>
        <AlertBox 
            type="success"
            message="Your profile has been updated successfully!"
            onClose={() => alert('Alert closed')}
            >
            <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>

        <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={(userId) => alert(`Editing user ${userId}`)}
            >
            <div className="text-sm text-gray-500">
             Last login: 2 hours ago
            </div>
        </UserProfileCard>
        
        <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
            >
            <div className="text-sm text-gray-500">
            Free shipping available
            </div>
        </ProductDisplay>
        </>

    )
}



// const App = () => {
//   const [showAlert, setShowAlert] = useState(false);
//   const [cartItems, setCartItems] = useState<string[]>([]);
 
//   const handleAddToCart = (productId: string) => {
//     setCartItems([...cartItems, productId]);
//     setShowAlert(true);
//   };
 
//   return (
//     <div className="p-4">
//       {showAlert && (
//         <AlertBox
//           type="success"
//           message="Product added to cart!"
//           onClose={() => setShowAlert(false)}
//         />
//       )}
 
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         <UserProfileCard
//           user={user}
//           showEmail={true}
//           showRole={true}
//         />
 
//         <ProductDisplay
//           product={product}
//           showDescription={true}
//           showStockStatus={true}
//           onAddToCart={handleAddToCart}
//         />
//       </div>
//     </div>
//   );
// };