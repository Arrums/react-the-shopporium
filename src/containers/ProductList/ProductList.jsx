import { SearchContext } from "../../context/SearchContext";
import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { updateProduct, getItems } from "../../services/server";
import ProductCard from "../../components/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ onAddToCart }) => {
	const { products, setProducts } = useContext(ProductsContext);

	const { search } = useContext(SearchContext);

	//filtering products according to search
	const filteredProducts = products.filter((product) => {
		return product.title.includes(search);
	});

	const addFav = async (selected) => {
		setProducts(
			products.map((product) => {
				return product.id !== selected.id
					? product
					: { ...product, isFav: !product.isFav };
			}),
		);
	};

	return (
		<section className={styles.ProductList}>
			{filteredProducts.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						addFav={addFav}
						onAddToCart={onAddToCart}
					/>
				);
			})}
		</section>
	);
};

export default ProductList;
