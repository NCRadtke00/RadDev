import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ProductStore from "./productStore";


interface Store {
    commonStore: CommonStore;
    productStore: ProductStore;
}

export const store: Store = {
    commonStore: new CommonStore(),
    productStore: new ProductStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
