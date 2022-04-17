import { createContext, useState, useEffect } from "react";
import { getItems } from "../services/server";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const data = await getItems();
		setProducts(data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const data = { products, setProducts };

	return (
		<ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
	);
};

export default ProductsProvider;
