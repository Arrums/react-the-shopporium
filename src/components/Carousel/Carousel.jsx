import { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "./Carousel.module.scss";

const Carousel = ({ products }) => {
	const [current, setCurrent] = useState(0);
	const featuredProducts = products.filter((product) => product.isFeatured);

	const length = featuredProducts.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section className={styles.slider}>
			<ArrowCircleLeftIcon
				className={styles.slider__left}
				onClick={prevSlide}
			/>
			{featuredProducts.map((item, i) => {
				return (
					<div className={i === current ? "slide-active" : "slide"} key={i}>
						{i === current && <img src={item.image} alt="Featured product" />}
					</div>
				);
			})}
			<ArrowCircleRightIcon
				className={styles.slider__right}
				onClick={nextSlide}
			/>
		</section>
	);
};
export default Carousel;
