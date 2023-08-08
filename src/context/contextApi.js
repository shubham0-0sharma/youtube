import { createContext, useState, useEffect } from "react";
import { fetchData } from "../utils/api";

// ! Creating and exporting the context so it can be used in useContext hook.
export const Context = createContext(null);

// * Creating a AppContext componet which will return and Context.provider with all the sate values in it and will use the fetch api method to modify the state and change it so that it can pass the updated state.
// ? it will by default recive the props.children element

export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [searchResults, setSearchResults] = useState([]);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchData(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
        return () => setSearchResults([]);
    };
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {children}
        </Context.Provider>
    );
};
