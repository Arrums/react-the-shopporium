import { IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./NavBar.module.scss";
import SearchBar from "./../../components/SearchBar";

const NavBar = () => {
	return (
		<>
			<nav className={styles.NavBar}>
				<ul className={styles.NavBar__List}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Products</a>
					</li>

					<li>
						<a href="#">Favorites</a>
					</li>
					<h1 className={styles.NavBar__List__Logo}>The Shopporium</h1>
					<SearchBar />
					<div className={styles.NavBar__List__BtnWrap}>
						<IconButton aria-label="Show cart" size="large">
							<Badge badgeContent={2} color="error">
								<ShoppingCart fontSize="inherit" />
							</Badge>
						</IconButton>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
