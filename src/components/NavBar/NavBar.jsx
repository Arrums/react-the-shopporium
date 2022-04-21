import { IconButton, Badge, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./NavBar.module.scss";
import SearchBar from "./../../components/SearchBar";

const NavBar = () => {
	return (
		<>
			<nav className={styles.NavBar}>
				<ul className={styles.NavBar__List}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Products">Products</Link>
					</li>

					<li>
						<Link to="/Favourites">Favorites</Link>
					</li>
					<h1 className={styles.NavBar__List__Logo}>The Shopporium</h1>
					<SearchBar />
					<div className={styles.NavBar__List__BtnWrap}>
						<IconButton aria-label="Show cart" size="large">
							<Badge badgeContent={1} color="error">
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
