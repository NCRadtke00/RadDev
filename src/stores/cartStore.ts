import {Product} from "../types/product"
import { makeAutoObservable, reaction } from "mobx"
import {toast} from "react-toastify"

class CartStore {
    cartRegistery: Map<number, Product> = process.browser ? new Map(JSON.parse(window.localStorage.getItem("cart") as string)) : new Map();
    constructor() {
        makeAutoObservable(this);
        reaction(() => 
            this.cartRegistery.entries(),
            (entries) => { 
                if(entries){
                    window.localStorage.setItem(
                        "cart", JSON.stringify(Array.from(entries))
                    );
                } else {
                    window.localStorage.removeItem("cart");
                }
            }
        );
    }
    get cart() {
        return Array.from(this.cartRegistery.values());
      }
      get cartTotal() {
        return parseInt(
          Array.from(this.cartRegistery.values())
            .reduce(
              (amount, product) => product.price * product.quantity + amount,
              0
            )
            .toFixed(2)
        );
      }
    get cartTotalItems(){

    }
    addToCart = () => {}
    removeFromCart = () => {}
    removeAllItems = () => {}
    clearCart = () => {}
}

export default CartStore