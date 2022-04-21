import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { getItems, updateProduct } from "./services/server";
import "./App.module.scss";
import Home from "./containers/Home";
import ProductsPage from "./containers/ProductsPage/ProductsPage";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import Footer from "./components/Footer/Footer";
import SearchProvider from "./context/SearchContext";
import FavPage from "./containers/FavPage/FavPage";

const App = () => {
	// const [cart, setCart] = useState([]);

	// const fetchCart = async () => {
	// 	const data = await getCart();
	// 	setCart(data);
	// };

	// const handleAddToCart = async (newRecord) => {
	// 	await createCartItem(newRecord);
	// 	const { id, ...record } = newRecord;
	// 	await updateCartItem(id, record);
	// };

	// useEffect(() => {
	// 	fetchCart();
	// }, []);

	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const data = await getItems();
		setProducts(data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<BrowserRouter>
				<SearchProvider>
					<StyledEngineProvider injectFirst>
						<Header />
						<Routes>
							<Route path="/" element={<Home products={products} />} />
							<Route
								path="Products"
								element={<ProductList products={products} />}
							/>
							<Route
								path="Products/:productId"
								element={<ProductsPage products={products} />}
							/>

							<Route
								path="favourites"
								element={<FavPage products={products} />}
							/>
						</Routes>
						<Footer />
					</StyledEngineProvider>
				</SearchProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
