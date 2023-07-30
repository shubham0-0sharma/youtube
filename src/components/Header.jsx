import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
const Header = () => {
    const navigate = useNavigate();
    const { loading, mobileMenu, setMobileMenu } = useContext(Context);
    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandler = (e) => {
        if (
            (e?.key == "Enter" || e === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`searchResult/${searchQuery}`);
        }
    };

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname.split("/").filter(Boolean)?.[0];

    return (
        //* Main header div starts
        <div className="flex flex-row h-14  justify-between items-center sticky z-10 top-0 px-4 md:px-5 bg-white dark:bg-black">
            {loading && <Loader />}
            {/* // TODO create a responsive design for mobile devices */}

            {/* //! Logo Section */}
            <div className="flex h-5 items-center">
                <Link to="/" className="flex h-5 items-center">
                    {/* //? For screens  */}
                    <img
                        src={ytLogo}
                        alt="Youtube"
                        className="h-full hidden dark:md:block"
                    />
                    {/* //? For mobile */}
                    <img
                        src={ytLogoMobile}
                        alt="Youtube"
                        className="md:hidden h-full"
                    />
                </Link>
            </div>

            {/* //! Search Bar Section */}
            <div>
                <div></div>
                <button></button>
            </div>

            {/* //! Right Icons Section */}
            <div></div>
        </div>
        // *Main header div ends
    );
};

export default Header;
