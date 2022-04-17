import { useContext, useState } from "react";
import { Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, addFav, onAddToCart }) => {
	const [qty, setQty] = useState(0);
	const [size, setSize] = useState("small");

	const handleQty = (e) => {
		setQty(e.target.value);
	};

	const handleSize = (e) => {
		setSize(e.target.value);
	};

	const handleFavorite = () => {
		addFav(product);
	};

	const handleAddCart = async (quantity) => {
		if (quantity <= 0) {
			return;
		} else {
			await onAddToCart({ product, quantity });
		}
	};

	const sizeSelect = product.size.map((size, index) => {
		return (
			<option key={index} value={size}>
				{size}
			</option>
		);
	});

	return (
		<section className={styles.Card}>
			<img
				className={styles.Card__Media}
				src={product.image}
				alt={product.title}
			/>
			<div className={styles.Card__Content}>
				<Typography fontSize={18}>{product.title}</Typography>
				<Typography fontSize={18}>${product.price}</Typography>
			</div>
			<div className={styles.Card__Action}>
				<label htmlFor="qty">Qty:</label>
				<input
					onChange={handleQty}
					value={qty}
					type="number"
					min="0"
					max={product.quantity}
					id="qty"
				/>

				{/* <label htmlFor="size">Size:</label>
				<select onChange={handleSize} value={size} id="size">
					{sizeSelect}
				</select> */}

				<IconButton aria-label="Add to favorites" onClick={handleFavorite}>
					{product.isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</IconButton>
				<IconButton aria-label="Add to cart" onClick={handleAddCart}>
					<AddShoppingCart />
				</IconButton>
			</div>
		</section>
	);
};

export default ProductCard;
