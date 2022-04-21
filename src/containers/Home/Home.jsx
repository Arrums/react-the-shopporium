import Carousel from "../../components/Carousel";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
	return (
		<>
			<Carousel products={products} />
			<div className={styles.ProductGrid}>
				{products.map((product) => {
					return (
						<Link to="/Products">
							<div
								className={styles.ProductGrid__Items}
								alt="clothes"
								key={product.id}>
								<img src={product.image} />
								<p>{product.title}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Home;
