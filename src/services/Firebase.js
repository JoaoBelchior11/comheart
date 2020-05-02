import firebase from "firebase";
import { DB_CONFIG } from "../Config";

firebase.initializeApp(DB_CONFIG);

const productsRef = firebase.database().ref("products");

export default productsRef;
