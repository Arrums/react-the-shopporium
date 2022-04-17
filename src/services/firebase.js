// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDVobdX1GXxl_-UCjcoI2CqaQuqsNON5BU",
	authDomain: "ecommerce-34121.firebaseapp.com",
	projectId: "ecommerce-34121",
	storageBucket: "ecommerce-34121.appspot.com",
	messagingSenderId: "384084644615",
	appId: "1:384084644615:web:b5ce373c602d22903e6ba2",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
