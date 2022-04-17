import { createContext, useState } from "react";

//creating a context
export const SearchContext = createContext();

// component provider
const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState("");
	const data = { search, setSearch };

	return (
		<SearchContext.Provider value={data}>{children}</SearchContext.Provider>
	);
};

export default SearchProvider;
