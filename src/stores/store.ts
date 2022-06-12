import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ProductStore from "./productStore";
import SearchStore from "./searchStore";
import CartStore from "./cartStore";


interface Store {
    commonStore: CommonStore;
    productStore: ProductStore;
    searchStore: SearchStore;
    cartStore: CartStore;

}

export const store: Store = {
    commonStore: new CommonStore(),
    productStore: new ProductStore(),
    searchStore: new SearchStore(),
    cartStore: new CartStore(),

};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
