import { useState, useEffect } from "react";
import { getCart } from "../../services/server";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./CartItem.module.scss";

const Cart = () => {
	const [qty, setQty] = useState(1);

	const handleQty = (e) => {
		setQty(e.target.value);
	};

	return (
		<div className={styles.Cart}>
			<div className={styles.CartItem__Photo}>
				<img />
			</div>
			<div className={styles.CartItem__Desc}>
				<h3>title</h3>
				<p>$10</p>

				<div className={styles.CartItem__Qty}>
					<label htmlFor="qty">Qty:</label>
					<input
						onChange={handleQty}
						value={qty}
						type="number"
						min="0"
						max="10"
						id="qty"
					/>
					<IconButton aria-label="Remove item">
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Cart;
