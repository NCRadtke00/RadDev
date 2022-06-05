import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../types/product";
import { store } from "./store";



class ProductStore {
    productRegistery = new Map<number, Product>();
    selectedProduct? : Product;
    activeCategory = "all products";
    constructor(){
        makeAutoObservable(this);
    }
    get products() {
        return Array.from(this.productRegistery.values());
    }
    get totalProducts(){
        return Array.from(this.productRegistery.values()).reduce(
            (total, product) => product.quantity + total, 0);
    }
    
}

export default ProductStore;
