import { useState, useEffect } from "react";
import { getItems } from "../../services/server";
import Carousel from "../../components/Carousel";
import ProductList from "../ProductList";

const Home = ({ products }) => {
	return (
		<>
			<Carousel products={products} />
			<ProductList />
		</>
	);
};

export default Home;
