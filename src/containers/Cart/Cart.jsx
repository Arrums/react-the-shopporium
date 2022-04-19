import CartItem from "../../components/CartItem";
import "./Cart.module.scss";
import { Container, Typography, Button, Grid } from "@mui/material";

const Cart = ({ cart }) => {
	const isEmpty = !cart.length;
	const EmptyCart = () => {
		<Typography variant="subtitle1">
			You have no items in your shopping cart.
		</Typography>;
	};

	const FilledCart = () => {
		<>
			<Grid container spacing={2}>
				{cart.map((product) => {
					<Grid item xs={12} sm={4} key={product.id}>
						<div>
							{product.title}
							Subtotal: {product.price}
							<div>
								<Button
									className={styles.emptyButton}
									size="large"
									type="button"
									variant="contained"
									color="error">
									Empty Cart
								</Button>
								<Button
									className={styles.checkoutButton}
									size="large"
									type="button"
									variant="contained">
									Checkout
								</Button>
							</div>
						</div>
					</Grid>;
				})}
			</Grid>
			<div className={styles.cardDetails}>
				<Typography variant="h4"></Typography>
			</div>
		</>;
	};
	return (
		<Container>
			<Typography className={styles.title} variant="h3">
				Your Shopping Cart
			</Typography>
			{isEmpty ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
	// const handleClickAdd = (item) => {
	// 	onAddToCart(item);
	// };
	// return (
	// 	<aside className={styles.Cart}>
	// 		<h2>Cart Items</h2>
	// 		<div>{cart.length === 0 && <p>Cart is empty</p>}</div>
	// 		{cart.map((item) => (
	// 			<div key={item.id} className={styles.Cart__Row}>
	// 				<div className={styles.Cart__Col2}>{item.name}</div>
	// 				<div className={styles.Cart__Col2}>
	// 					<button className={styles.Cart__Add}>+</button>
	// 					<button className={styles.Cart__Remove}>-</button>
	// 				</div>
	// 				<div className={styles.Cart__Col2 + "" + styles.Cart__textright}>
	// 					{item.quantity} x ${item.price}
	// 				</div>
	// 			</div>
	// 		))}
	// 	</aside>
	// );
};

export default Cart;
