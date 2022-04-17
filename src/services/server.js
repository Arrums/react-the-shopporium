import firestore from "./firebase.js";
import items from "./items.js";

//sending items array to firestore database
export const sendingItems = async () => {
	const collectionRef = firestore.collection("Products");

	const data = await collectionRef.get();

	// if database isn't empty then we want to exit the function
	if (!data.empty) {
		return;
	}

	const promises = items.map(async (item) => {
		return await collectionRef.add(item);
	});

	await Promise.all(promises);
};

// reading and downloading documents in database
export const getItems = async () => {
	await sendingItems();

	//accessing Products collection
	const collectionRef = firestore.collection("Products");

	const queryData = await collectionRef.get();

	//return array of all documents
	const documents = queryData.docs;

	//return an object with all the fields in the document
	const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

	return data;
};

//updating product
export const updateProduct = async (id, record) => {
	const collectionRef = firestore.collection("Products");

	//record = data we want to update
	const docuRef = collectionRef.doc(id);
	await docuRef.update(record);
};

//getting items from cart
export const getCart = async () => {
	const collectionRef = firestore.collection("cart");

	const queryData = await collectionRef.get();

	const documents = queryData.docs;

	return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//creating cart item
export const createCartItem = async (record) => {
	const collectionRef = firestore.collection("cart");
	// Add a new document to cart collection with record.
	await collectionRef.add(record);
};

//updating item in cart
export const updateCartItem = async (id, record) => {
	const collectionRef = firestore.collection("cart");

	const docuRef = collectionRef.doc(id);
	await docuRef.update(record);
};

//deleting item in cart

export const deleteCartItem = async (id) => {
	const collectionRef = firestore.collection("cart");

	const docuRef = collectionRef.doc(id);

	// Deleting the Doc refered in the Reference
	await docuRef.delete();
};
