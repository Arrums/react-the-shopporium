import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
	const [input, setInput] = useState("");

	//destructured the context
	const { setSearch } = useContext(SearchContext);

	const handleChange = (e) => setInput(e.target.value);

	const handleClick = () => {
		setSearch(input);
		//reset the input value to empty string
		setInput("");
	};

	return (
		<div className={styles.SearchBar}>
			<input
				type="text"
				onChange={handleChange}
				value={input}
				placeholder="Search for a product"
				className={styles.SearchBar__Input}
			/>
			<IconButton onClick={handleClick}>
				<SearchIcon />
			</IconButton>
		</div>
	);
};

export default SearchBar;
