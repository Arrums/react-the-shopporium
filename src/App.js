import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { getCart, createCartItem, updateCartItem } from "./services/server";
import "./App.module.scss";
// import Home from "./containers/Home";
import ProductList from "./containers/ProductList/ProductList";
import Header from "./containers/Header";
// import Cart from "./containers/Cart";
// import Footer from "./containers/Footer";
import SearchProvider from "./context/SearchContext";

const App = () => {
	const [cart, setCart] = useState([]);

	const fetchCart = async () => {
		const data = await getCart();
		setCart(data);
	};

	// const handleAddToCart = async (newRecord) => {
	// 	await createCartItem(newRecord);
	// 	const { id, ...record } = newRecord;
	// 	await updateCartItem(id, record);
	// };

	useEffect(() => {
		fetchCart();
	}, []);
	return (
		<>
			<SearchProvider>
				<StyledEngineProvider injectFirst>
					<Header />
					<ProductList />
				</StyledEngineProvider>
			</SearchProvider>
		</>
	);
};

export default App;
