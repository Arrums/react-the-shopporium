import CartItem from "../../components/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
	return (
		<div className={styles.Cart}>
			<h2>Cart Items</h2>
			{Cart.length === 0 ? <p>Cart is empty</p> : <CartItem />}
		</div>
	);
};

export default Cart;
