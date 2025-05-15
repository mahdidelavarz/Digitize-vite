import { useContext, useReducer, createContext, ReactNode } from "react";
import CartReducer from "./CartReducer";
import { CartType , CartAction } from "../../types/CartType";


const CartContext = createContext({} as CartType[]);
const CartContextDispatcher = createContext({} as CartAction);

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const UseCart = () => useContext(CartContext);
export const CartActions = () => useContext(CartContextDispatcher);
