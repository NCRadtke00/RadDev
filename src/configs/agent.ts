import { collection, addDoc, getDocs } from "firebase/firestore";
import axios, { AxiosResponse } from 'axios';
import { Product } from "../types/product"
import { db } from "./firebase"

//add data
try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

//get data
const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});

//this file is going to manage db logic