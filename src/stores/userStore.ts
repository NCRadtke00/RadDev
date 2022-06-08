import { db } from "../configs/firebase";
import { makeAutoObservable, runInAction } from "mobx";

import { UserDetails } from "../types/user";
import { store } from "./store";
import firebase from "firebase/compat/app";

class UserStore {
    userDetails: UserDetails | null = null;
  
    constructor() {
      makeAutoObservable(this);
    }
  
    loadUserDetails = (email: string) => {
      store.commonStore.setAppLoading(true);
  
      db.collection("users")
        .doc(email)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            runInAction(() => {
              this.userDetails = snapshot.data() as UserDetails;
            });
          }
        });
  
      store.commonStore.setAppLoading(false);
    };
  
    
  }
  
  export default UserStore;
  