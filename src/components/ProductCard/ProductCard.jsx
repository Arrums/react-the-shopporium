import { useContext, useEffect, useState } from "react";
import { Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, addFav }) => {
	const [qty, setQty] = useState(1);
	const [size, setSize] = useState("small");
	const [fav, setFav] = useState(product.isFav);

	const handleQty = (e) => {
		setQty(e.target.value);
	};

	const handleSize = (e) => {
		setSize(e.target.value);
	};

	const handleFavorite = () => {
		setFav(!product.isFav);
	};

	const sizeSelect = product.size.map((size, index) => {
		return (
			<option key={index} value={size}>
				{size}
			</option>
		);
	});

	useEffect(() => {
		addFav({ ...product, isFav: fav });
	}, [fav]);

	const path = `/Products/${product.id}`;

	return (
		<section className={styles.Card}>
			<Link to={path}>
				<img
					className={styles.Card__Media}
					src={product.image}
					alt={product.title}
				/>
			</Link>
			<div className={styles.Card__Content}>
				<Typography fontSize={18}>{product.title}</Typography>
				<Typography fontSize={18}>${product.price}</Typography>
			</div>
			<div className={styles.Card__Action}>
				<div>
					<label htmlFor="qty">Qty:</label>
					<input
						onChange={handleQty}
						value={qty}
						type="number"
						min="0"
						max={product.quantity}
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
					{product.isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</IconButton>
				<IconButton aria-label="Add to cart">
					<AddShoppingCart />
				</IconButton>
			</div>
		</section>
	);
};

export default ProductCard;
