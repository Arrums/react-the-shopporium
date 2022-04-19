import { useState, useEffect } from "react";
import { getItems } from "../../services/server";
import Carousel from "../../components/Carousel";

const Home = () => {
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
			<Carousel products={products} />
		</>
	);
};

export default Home;
