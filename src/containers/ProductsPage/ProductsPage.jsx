import { useState, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const ProductsPage = () => {
	const { products, setProducts, addFav } = useContext(ProductsContext);

	return <></>;
};

export default ProductsPage;
