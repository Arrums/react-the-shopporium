import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCart, createCartItem, updateCartItem } from "./services/server";
import "./App.module.scss";
import ProductList from "./containers/ProductList/ProductList";
import Header from "./containers/Header";
import Cart from "./containers/Cart";
// import Footer from "./containers/Footer";
import SearchProvider from "./context/SearchContext";
import ProductsProvider from "./context/ProductsContext";

const App = () => {
	const [cart, setCart] = useState([]);

	const getCartItems = async () => {
		const data = await getCart();
		setCart(data);
	};

	//Checking the cart and updating the quantity
	const handleAddToCart = async (record) => {
		const { product, quantity } = record;
		const cartItem = await getCart();

		const found = cartItem.find((item) => item.id === product.id);

		if (found) {
			await updateCartItem(found.id, {
				...found,
				quantity: found.quantity + quantity,
			});
		} else {
			await createCartItem(record);
		}
	};
	return (
		<>
			<ProductsProvider>
				<SearchProvider>
					<Header />
					<ProductList onAddToCart={handleAddToCart} />
					<Cart />
				</SearchProvider>
			</ProductsProvider>
			{/* <Footer /> */}
		</>
	);
};

export default App;
