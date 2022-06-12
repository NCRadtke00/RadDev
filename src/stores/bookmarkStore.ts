import { makeAutoObservable, reaction } from "mobx";
import { toast } from "react-toastify";
import { Product } from "types/product";

class BookmarkStore {
    bookmarkRegistery: Map<number, Product> = process.browser ?
    new Map(JSON.parse(window.localStorage.getItem("bookmarks") as string))
    : new Map();
    constructor(){
        makeAutoObservable(this.bookmarkRegistery);
        reaction(
            () => this.bookmarkRegistery.entries(),
            (entries) => {
                if (entries) {
                    window.localStorage.setItem(
                        "bookmarks",
                         JSON.stringify(Array.from(entries))
                         );
                } else {
                    window.localStorage.removeItem("bookmarks");
                }
            }
        );
    }
    get bookmarks(){
return null;
    }
    get totalBookmarks(){
return null;
    }
    addBookmark = () => {}
    removeBookmark = () => {}
}