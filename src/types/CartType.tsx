export type CartType = {
  id: number;
  image: string;
  name: string;
  nameF: string;
  selectedColor: { [k: string]: any };
  garanti: string;
  existed: boolean;
  logo: string;
  quantity: number;
  cart: { [k: string]: any };
  total: number;
  price: number;
};
export type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: CartType;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: CartType;
    };
