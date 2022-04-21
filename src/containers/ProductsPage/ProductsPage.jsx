import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getItems, updateProduct } from "../../services/server";
import { Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./ProductsPage.module.scss";

const ProductsPage = ({ products }) => {
	const [item, setItem] = useState({});
	let { productId } = useParams();

	const [qty, setQty] = useState(1);
	const [size, setSize] = useState("small");
	const [fav, setFav] = useState(item.isFav);

	const handleQty = (e) => {
		setQty(e.target.value);
	};

	const handleSize = (e) => {
		setSize(e.target.value);
	};

	//change fav state and refetch product data

	const handleFav = async (updatedRecord) => {
		const { id, ...record } = updatedRecord;
		await updateProduct(id, record);
		setFav(await getItems());
	};

	// const sizeSelect = item.size.map((size, index) => {
	// 	return (
	// 		<option key={index} value={size}>
	// 			{size}
	// 		</option>
	// 	);
	// });

	useEffect(() => {
		if (products.length > 0)
			setItem(
				products.find((product) => {
					return product.id == productId;
				}),
			);
	}, []);

	return (
		<section className={styles.Card}>
			<img className={styles.Card__Media} src={item.image} alt={item.title} />
			<div className={styles.Card__Content}>
				<Typography fontSize={18}>{item.title}</Typography>
				<Typography fontSize={18}>${item.price}</Typography>
				<p>{item.description}</p>
				<label htmlFor="qty">Qty:</label>
				<input
					onChange={handleQty}
					value={qty}
					type="number"
					min="0"
					max={item.quantity}
					id="qty"
				/>
				{/* <div>
					<label htmlFor="size">Size:</label>
					<select onChange={handleSize} value={size} id="size">
						{sizeSelect}
					</select>
				</div> */}

				<IconButton aria-label="Add to favorites" onClick={handleFav}>
					{item.isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</IconButton>
				<IconButton aria-label="Add to cart">
					<AddShoppingCart />
				</IconButton>
			</div>
		</section>
	);
};

export default ProductsPage;
