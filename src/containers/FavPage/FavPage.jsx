import styles from "./FavPage.module.scss";
import { useEffect, useState } from "react";
import ProductList from "../ProductList/";

const FavPage = ({ products }) => {
	const [favProd, setFavProd] = useState(products.filter((prod) => prod.isFav));

	useEffect(() => {
		setFavProd(products.filter((prod) => prod.isFav));
	}, [products]);

	return (
		<div>
			<ProductList products={favProd} />
		</div>
	);
};

export default FavPage;
