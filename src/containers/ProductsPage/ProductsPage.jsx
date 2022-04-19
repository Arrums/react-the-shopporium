import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Typography, IconButton } from "@mui/material";
import {
	AddShoppingCart,
	ProductionQuantityLimitsRounded,
} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./ProductsPage.module.scss";

const ProductsPage = ({ products }) => {
	const { productId } = useParams();
	let params = useParams();

	const [item, setItem] = useState({});

	const [qty, setQty] = useState(1);
	const [size, setSize] = useState("small");
	const [fav, setFav] = useState(products.isFav);

	const handleQty = (e) => {
		setQty(e.target.value);
	};

	const handleSize = (e) => {
		setSize(e.target.value);
	};

	const handleFavorite = () => {
		setFav(!products.isFav);
	};

	const sizeSelect = item.size.map((size, index) => {
		return (
			<option key={index} value={size}>
				{size}
			</option>
		);
	});

	let navigate = useNavigate();

	useEffect(() => {
		setItem(products.find((product) => product.id == params.productId));
	}, [products]);

	return products ? (
		<section className={styles.Card}>
			<img className={styles.Card__Media} src={item.image} alt={item.title} />
			<div className={styles.Card__Content}>
				<Typography fontSize={18}>{item.title}</Typography>
				<Typography fontSize={18}>${item.price}</Typography>
			</div>
			<div className={styles.Card__Action}>
				<p>{item.description}</p>
				<div>
					<label htmlFor="qty">Qty:</label>
					<input
						onChange={handleQty}
						value={qty}
						type="number"
						min="0"
						max={item.quantity}
						id="qty"
					/>
				</div>
				<div>
					<label htmlFor="size">Size:</label>
					<select onChange={handleSize} value={size} id="size">
						{sizeSelect}
					</select>
				</div>

				<IconButton aria-label="Add to favorites" onClick={handleFavorite}>
					{item.isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</IconButton>
				<IconButton aria-label="Add to cart">
					<AddShoppingCart />
				</IconButton>
			</div>
		</section>
	) : (
		navigate("/Home")
	);
};

export default ProductsPage;
