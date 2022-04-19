import { SearchContext } from "../../context/SearchContext";
import { useState, useContext, useEffect } from "react";
import { updateProduct, getItems } from "../../services/server";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ onAddToCart }) => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const data = await getItems();
		setProducts(data);
	};

	const { search } = useContext(SearchContext);

	//filtering products according to search
	const filteredProducts = products.filter((product) => {
		return product.title.includes(search);
	});

	useEffect(() => {
		getProducts();
	}, []);

	const addFav = async (updatedRecord) => {
		const { id, ...record } = updatedRecord;
		await updateProduct(id, record);
		getItems();
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
