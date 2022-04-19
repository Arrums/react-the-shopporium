import { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "./Carousel.module.scss";

const Carousel = ({ products }) => {
	const [current, setCurrent] = useState(0);
	const [featuredProducts, setFeaturedProducts] = useState([]);

	useEffect(() => {
		setFeaturedProducts(products.filter((product) => product.isFeatured));
	}, [products]);

	const nextSlide = () => {
		setCurrent(current === 2 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? 2 : current - 1);
	};

	if (featuredProducts.length > 0) {
		return (
			<section className={styles.Slider}>
				<ArrowCircleLeftIcon
					className={styles.Slider__left}
					onClick={prevSlide}
				/>

				<div className={styles.Slider__Slide}>
					<img
						className={styles.Slider__Slide__image}
						src={featuredProducts[current]?.image}
						alt="Featured product"
					/>
				</div>

				<ArrowCircleRightIcon
					className={styles.Slider__right}
					onClick={nextSlide}
				/>
			</section>
		);
	}
};
export default Carousel;
